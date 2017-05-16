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

public final class Year: Model {
    public var id: Node?
    
    public var yearNumber: Int
    
    public static var entity = "years"
    
    public var exists: Bool = false
    
    
    public init(yearNumber: Int){
        self.yearNumber = yearNumber
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        yearNumber = try node.extract("yearNumber")
        
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
            "yearNumber": yearNumber
            ])
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ schedules in
            schedules.id()
            schedules.int("yearNumber")
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    
}

public extension Year {
    
    public func getCourses() throws -> Siblings<Course> {
        
        return try siblings()
    }
    
    public func getStudyType() throws -> Siblings<StudyType> {
        
        return try siblings()
    }
}

