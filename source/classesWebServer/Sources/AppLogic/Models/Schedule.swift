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

public final class Schedule: Model {
    public var id: Node?
    
    public var start: String
    public var end: String
    
    public var background_color: String
    public var font_color: String
    
    public var courseId: Node
    
    public static var entity = "schedules"

    public var exists: Bool = false

    
    public init(for courseId: Node, that startAt: String, and endAt: String, _ background_color:String, _ font_color: String){
        self.courseId = courseId
        self.start = startAt
        self.end = endAt
        self.background_color = background_color
        self.font_color = font_color
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        courseId = try node.extract("course_id")
        start = try node.extract("start")
        end = try node.extract("end")
        background_color = try node.extract("background_color")
        font_color = try node.extract("font_color")

    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "course_id": courseId,
            "start" : start,
            "end": end,
            "background_color": background_color,
            "font_color": font_color
            ])
        
        switch context {
        case ResourseContext.snippet:
            var node = try Node(node:[
                "start" : start,
                "end": end,
                "background_color": background_color,
                "font_color": font_color
                ])
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ schedules in
            schedules.id()
            schedules.parent(Course.self)
            schedules.string("start")
            schedules.string("end")
            schedules.string("background_color")
            schedules.string("font_color")

        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    
}

public enum ScheduleContext: Context {
    case snippet
}

