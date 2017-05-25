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

public final class Faculty: Model {
    public var id: Node?
    
    // use to keep the ref to the USI API
    public var usiApiID: Int
    public var name_en: String
    
    public var exists: Bool = false

    public init(usiApiID : Int, name_en: String){
        self.usiApiID = usiApiID
        self.name_en = name_en
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        usiApiID = try node.extract("usiApiID")
        name_en = try node.extract("name_en")

    }
    
    public static func createIfNotExist(usiApiID: Int, name_en: String ) throws -> Faculty {
        
        return try Faculty.query().filter("usiApiID", usiApiID).first() ?? create(usiApiID: usiApiID,name_en: name_en)
        
    }
    
    public static func create(usiApiID: Int, name_en: String ) throws -> Faculty {
        var newFaculty = Faculty(usiApiID: usiApiID, name_en: name_en)
        
        try newFaculty.save()

        return newFaculty
    
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "usiApiID": usiApiID,
            "name_en": name_en,
            ])
        
        switch context {
        case ResourseContext.all:
            node["studies"] = try getStudies().all().makeNode(context: ResourseContext.all).makeNode()
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ faculties in
            faculties.id()
            faculties.int("usiApiID")
            faculties.string("name_en")
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    
}


public extension Faculty{
    
    public func getCourses() throws -> Children<Course> {
        
        return children()
    }
    
    public func getStudies() throws -> Children<Study> {
    
        return children()
    }
}
