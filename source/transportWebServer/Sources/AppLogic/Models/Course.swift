//
//  Bus.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//
import Foundation
import Vapor
import Fluent

public final class Course: Model {
    public var id: Node?
    public var facultyId: Node
    // use to keep the ref to the USI API
    public var usiApiID: Int
    // USI API data
    public var name_en: String
    public var name_it: String
    public var semester_academic_year: String
    
    public var exists: Bool = false
    
    public init(facultyId: Node, usiApiID: Int, name_en: String, name_it: String, semester_academic_year: String){
        self.facultyId = facultyId
        self.usiApiID = usiApiID
        self.name_en = name_en
        self.name_it = name_it
        self.semester_academic_year = semester_academic_year
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        facultyId = try node.extract("faculty_id")
        usiApiID = try node.extract("usiApiID")
        name_en = try node.extract("name_en")
        name_it = try node.extract("name_it")
        semester_academic_year = try node.extract("semester_academic_year")
    }
    
    public static func createIfNotExist(facultyId: Node, usiApiID: Int, name_en: String, name_it: String, semester_academic_year: String) throws -> Course {
        
        return try Course.query().filter("usiApiID", usiApiID).first() ?? create(facultyId : facultyId,
                                                                                 usiApiID : usiApiID,
                                                                                 name_en : name_en,
                                                                                 name_it: name_it,
                                                                                 semester_academic_year: semester_academic_year)
    }
    
    public static func create(facultyId: Node, usiApiID: Int, name_en: String, name_it: String, semester_academic_year: String) throws -> Course {
        var newCourse = Course(facultyId: facultyId,
                               usiApiID: usiApiID,
                               name_en: name_en,
                               name_it: name_it,
                               semester_academic_year: semester_academic_year)
        
        try newCourse.save()
        
        return newCourse
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "faculty_id": facultyId,
            "name_en" : name_en,
            "name_it" : name_it,
            "usiApiID": usiApiID,
            "semester_academic_year": semester_academic_year
            ])
        
        switch context {
        case ResourseContext.all:
//            node["education"] = try getYear().makeQuery().all().makeNode()
//            node["type_name"] = try getStudyType().makeQuery().first()?.makeNode()
            node["education"] = try Node(node: [
                "type" : try getStudy().makeQuery().first()?.makeNode(),
                "type_name": try getStudyType().makeQuery().first()?.makeNode(),
                "yearNumber":try getYear().makeQuery().all().makeNode()
                ])

        default:
            break
        }
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ courses in
            courses.id()
            courses.parent(Faculty.self, optional: false)
            courses.int("usiApiID")
            courses.string("name_en")
            courses.string("name_it")
            courses.string("semester_academic_year")
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    
}


public extension Course {
    
    public func getFaculty() throws -> Faculty? {
        return try parent(facultyId).get()
    }
    
    public func getSchedules() throws -> [Schedule] {
        
        return try children().all()
    }
    
    public func getYear() throws -> Siblings<Year> {
        
        return try siblings()
    }
    
    public func getStudy() throws -> Siblings<Study> {
        return try siblings()
    }
    
    public func getStudyType() throws -> Siblings<StudyType> {
        
        return try siblings()
    }
}
