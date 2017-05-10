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

final class CourseController {
    
    static func getCourse(_ req: Request, course: Course) throws -> ResponseRepresentable {
        
        return try course.makeNode(context: ResourseContext.all).converted(to: JSON.self)
    }
    
    static func getSchedules(_ req: Request, course: Course) throws -> ResponseRepresentable {
        
        return try course.getSchedules().makeNode(context: ResourseContext.snippet).converted(to: JSON.self)
    }
    
    static func search(_ req: Request) throws -> ResponseRepresentable {
        
        var yearQuery = try Year.query()
        var courseQuery = try Course.query()
        
        if let type = req.query?["type"]?.string {
            guard let study = try Study.query().filter("type", type).first() else {
                throw Abort.badRequest
            }
            
            courseQuery = try study.getCourses().makeQuery()

        }
        
        
        if let studyTypeString = req.query?["studyType"]?.int  {
            guard let studyType = try StudyType.find(studyTypeString) else {
                throw Abort.badRequest
            }
            
            courseQuery = try studyType.getCourses().makeQuery()
        }
        
        
        if let yearNumber = req.query?["yearNumber"]?.int {
            guard let year = try yearQuery.filter("yearNumber",yearNumber).first() else {
                throw Abort.badRequest
            }

            let yearCourse = try year.getCourses().makeQuery()
            
            let ids = try yearCourse.all().map { $0.id }
            
            courseQuery = try courseQuery.makeQuery().filter("id", .in, ids as! [NodeRepresentable])
        }
        
        if let semester_academic_year = req.query?["semester_academic_year"]?.string {
            try courseQuery.filter("semester_academic_year", semester_academic_year)
        }
        
        if let facultyId = req.query?["facultyId"]?.int {
            try courseQuery.filter("faculty_id", facultyId)
        }
        
        return try courseQuery.all().makeNode(context: ResourseContext.snippet).converted(to: JSON.self)
    }
    
}
