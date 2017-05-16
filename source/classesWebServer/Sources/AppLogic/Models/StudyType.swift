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

public final class StudyType: Model {
    public var id: Node?
    
    public var studyId: Node
    public var name_en: String
    
    public static var entity = "study_types"
    
    public var exists: Bool = false
    
    
    public init(studyId: Node,name_en: String){
        self.name_en = name_en
        self.studyId = studyId
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        name_en = try node.extract("name_en")
        studyId = try node.extract("study_id")
        
    }
    
    public static func createIfNotExist(studyId: Node, name_en: String) throws -> StudyType {
        
        return try StudyType.query().filter("name_en",name_en).first() ?? create(studyId: studyId, name_en: name_en)
    }
    
    public static func create(studyId: Node, name_en: String) throws -> StudyType {
        
        var newYear = StudyType(studyId: studyId, name_en: name_en)
        try newYear.save()
        
        return newYear
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "name_en" : name_en,
            "study_id": studyId
            
            ])
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ studyTypes in
            studyTypes.id()
            studyTypes.string("name_en")
            studyTypes.parent(Study.self)

            
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    
}


public extension StudyType {
    
    public func getYear() throws -> Siblings<Year> {
        
        return try siblings()
    }
    
    public func getStudy() throws -> Parent<Study> {
        
        return try parent(studyId)
    }
    
    public func getCourses() throws -> Siblings<Course> {
        
        return try siblings()
    }
}
