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

public final class Study: Model {
    public var id: Node?
    public var facultyId: Node
    
    public var type: String
    
    public static var entity = "studies"
    
    public var exists: Bool = false
    
    
    public init(facultyId:Node, type: String){
        self.facultyId = facultyId
        self.type = type
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        type = try node.extract("type")
        facultyId = try node.extract("faculty_id")
        
    }
    
    public static func createIfNotExist(facultyId:Node,type: String) throws -> Study {
        
        return try Study.query().filter("faculty_id",facultyId).filter("type",type).first() ?? create(facultyId:facultyId, type: type)
    }
    
    public static func create(facultyId: Node, type: String) throws -> Study {
        
        var newYear = Study(facultyId:facultyId,type: type)
        try newYear.save()
        
        return newYear
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "type": type,
            "faculty_id": facultyId
            
            ])
        
        switch context {
        case ResourseContext.all:
            node["years"] = try  getYear().all().makeNode()
            node["studyTypes"] = try getStudyType().makeNode()
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ schedules in
            schedules.id()
            schedules.string("type")
            schedules.parent(Faculty.self)
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    
}


public extension Study {
    
    public func getCourses() throws -> Siblings<Course> {
        
        return try siblings()
    }
    
    
    public func getStudyType() throws -> [StudyType] {
        
        return try children().all()
        
    }
    
    public func getYear() throws -> Siblings<Year> {
        
        return try siblings()
    }
}

