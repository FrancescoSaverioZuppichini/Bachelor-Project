//
//  CourseController.swift
//  coursesWebServer
//
//  Created by VaeVictis on 27.04.17.
//
//

import Foundation
import Vapor
import Fluent
import HTTP

final class FacultyController {
    
    static func getFaculties(_ req: Request) throws -> ResponseRepresentable {
        var context = ResourseContext.snippet
        
        if let info = req.query?["info"]?.string {
            switch info {
            case "all":
                context = ResourseContext.all
            default:
                break
            }
        }
        
        return try Faculty.query().all().makeNode(context: context).converted(to: JSON.self)
        
    }
    
    static func getFaculty(_ req: Request, faculty: Faculty) throws -> ResponseRepresentable {
        var context = ResourseContext.snippet
        
        if let info = req.query?["info"]?.string {
            switch info {
            case "all":
                context = ResourseContext.all
            default:
                break
            }
        }
        
        return try faculty.makeNode(context: context).converted(to: JSON.self)
    }
    
    
    static func getCourses(_ req: Request, faculty: Faculty) throws -> ResponseRepresentable {
        
        return try faculty.getCourses().all().makeNode(context: ResourseContext.all).converted(to: JSON.self)
    }
    
    static func getStudies(_ req: Request, faculty: Faculty) throws -> ResponseRepresentable {
        return try faculty.getStudies().all().makeNode(context: ResourseContext.all).converted(to: JSON.self)

    }
    
}
