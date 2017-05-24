//
//  Year.swift
//  coursesWebServer
//
//  Created by VaeVictis on 28.04.17.
//
//

import Foundation
import Vapor
import Fluent
import HTTP


public final class Preference: Model {
    public var id: Node?
    
    public var userId: Int
    public var facultyId: Node
    
    public static var entity = "preferences"
    
    public init(userId: Int, facultyId: Node){
        self.userId = userId
        self.facultyId = facultyId
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        userId = try node.extract("user_id")
        facultyId = try node.extract("faculty_id")
        
    }
    
    
    public static func createIfNotExist(yearNumber: Int) throws -> Year {
        
        return try Year.query().filter("yearNumber", yearNumber).first() ?? create(yearNumber: yearNumber)
    }
    
    public static func create(yearNumber: Int) throws -> Year {
        
        var newYear = Year(yearNumber: yearNumber)
        try newYear.save()
        
        return newYear
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "user_id": userId,
            "faculty_id": facultyId
            ])
        
        switch context {
            
        case ResourseContext.all:
            //            node["years"] =  try getYears().all().makeNode()
            if let year =  try getYears().first() {
                node["year"] = try year.makeNode()
            }
            node["faculty"] = try getFaculty().makeNode(context: ResourseContext.all)
            node["courses"] = try getCourses().all().makeNode()
            node["type"] = try getStudy().first()?.makeNode()
            node["studyType"] = try getStudyType().first()?.makeNode()
            
        default:
            break
        }
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ schedules in
            schedules.id()
            schedules.int("user_id")
            schedules.parent(Faculty.self)
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    
}

public extension Preference {
    
    public func getCourses() throws -> Siblings<Course> {
        
        return try siblings()
    }
    
    public func getFaculty() throws -> Faculty {
        
        return try parent(facultyId).get()!
    }
    
    public func getYears() throws ->Siblings<Year> {
        
        return try siblings()
    }
    
    public func getStudy() throws -> Siblings<Study> {
        
        return try siblings()
    }
    
    
    public func getStudyType() throws -> Siblings<StudyType> {
        
        return try siblings()
    }
}

