//
//  USIAPIFetcher.swift
//  coursesWebServer
//
//  Created by VaeVictis on 27.04.17.
//
//

import Vapor
import Foundation
import Dispatch
import HTTP
import Fluent
public final class USIAPIFetcher {
    
    enum UsiApiError: String, Error {
        case UsiApiParseError = "Could not parse the data from http://search.usi.ch/api/"
    }
    
    
    public static func storeSchedulesForCourse(course: Course) throws {
        
        let schedulesInfo = try drop.client.get("http://search.usi.ch/api/courses/\(course.usiApiID)/schedules").makeResponse()
        
        guard let schedules = schedulesInfo.data["data"]?.array else {
            throw UsiApiError.UsiApiParseError
        }
        
        
        for rawSchedule in schedules {
            let scheduleObj = rawSchedule.object
            
            guard let start  = scheduleObj?["start"]?.string, let end = scheduleObj?["end"]?.string, let background_color = scheduleObj?["background_color"]?.string, let font_color = scheduleObj?["font_color"]?.string else {
                throw UsiApiError.UsiApiParseError
            }
            
            var newSchedule = Schedule(for: course.id!, that: start, and: end, background_color, font_color)
            try newSchedule.save()
        }
        
        
        
        
    }
    
    public static func storeCoursesInformation(from data: Polymorphic?, with facultyId: Node) throws {
        
        guard let coursesInfo = data!.array else {
            throw UsiApiError.UsiApiParseError
        }
        
        for courseInfo in coursesInfo {
            let courseInfoObj = courseInfo.object!
            // get basic info
            guard let usiApiID = courseInfoObj["id"]?.int, let name_en = courseInfoObj["name_en"]?.string, let name_it = courseInfoObj["name_it"]?.string, let semester_academic_year = courseInfoObj["semester_academic_year"]?.string,
                let description_it = courseInfoObj["description_it"]?.string, let description_en = courseInfoObj["description_en"]?.string,
                let professor_full_name = courseInfoObj["lecturers"]?.object?["data"]?.array?[0].string  else {
                throw UsiApiError.UsiApiParseError
            }
            // get educations info
            guard let educationsData = courseInfoObj["educations"]?.object?["data"]?.array else {
                throw UsiApiError.UsiApiParseError
            }
            // USI api are really bad made, data is not an obj but an array, we need to take the first one because they have the madre morta
            if educationsData.count <= 0 {
                print("\(UsiApiError.UsiApiParseError) for course \(name_en)")
                continue
            }
            
            guard let educationsDataObj = educationsData[0].object else {
                throw UsiApiError.UsiApiParseError
            }
            
            guard let rawYears = educationsDataObj["year"]?.object?["description_en"]?.string, let studyName_en = educationsDataObj["education"]?.object?["name_en"]?.string, let type = educationsDataObj["education"]?.object?["type"]?.object?["name_en"]?.string else {

                throw UsiApiError.UsiApiParseError
            }
            
            
            let years = rawYears.characters.flatMap { Int($0.description) }
            
            let newCourse = try Course.createIfNotExist(facultyId: facultyId, usiApiID: usiApiID, name_en: name_en, name_it: name_it, semester_academic_year: semester_academic_year, description_it: description_it, description_en: description_en, professor_full_name: professor_full_name)
            
            
            let study =  try Study.createIfNotExist(facultyId:facultyId,type: type )
            
            var newPivotCourseStudy =  Pivot<Course,Study>(newCourse, study)
            try newPivotCourseStudy.save()
            
            let studyType =  try StudyType.createIfNotExist(studyId: study.id!, name_en: studyName_en )
            
            var newPivotCourse =  Pivot<Course,StudyType>(newCourse, studyType)
            
            try newPivotCourse.save()
            
            for yearNumber in years {
                let savedYear = try Year.createIfNotExist(yearNumber: yearNumber)
                
                var newPivot =  Pivot<Course,Year>(newCourse, savedYear)
                try newPivot.save()
                
                if let _ =  try Pivot<Study,Year>.query().filter("study_id", study.id!).filter("year_id", savedYear.id!).first() {
                    continue
                }
                
                var newPivot2 =  Pivot<Study,Year>(study, savedYear)
                try newPivot2.save()
                
            }
            

            print(years,":", type, ", \(studyName_en) -",name_en)

            try storeSchedulesForCourse(course: newCourse)
        }
        
    }
    
    public static func storeFacultiesAndCoursesInformation() throws {
        
        let facultiesIds = [3]
        
        for facultyId in facultiesIds {
            
            let facultyInfo = try drop.client.get("http://search.usi.ch/api/faculties/\(facultyId)").makeResponse()
            
            guard let usiApiID = facultyInfo.data["id"]?.int, let name_en = facultyInfo.data["name_en"]?.string else {
                throw UsiApiError.UsiApiParseError
            }
            
            let faculty = try Faculty.createIfNotExist(usiApiID: usiApiID, name_en: name_en)
            
            let facultyCoursesInfo = try drop.client.get("http://search.usi.ch/api/faculties/\(faculty.usiApiID)/courses").makeResponse()
            
            try storeCoursesInformation( from: facultyCoursesInfo.data["data"], with: faculty.id!)
            
            //        let facultyInfoWithCourses = try drop.client.get("http://search.usi.ch/api/faculties/3/courses")
            
        }
    }
    
    public static func cleanAll() throws {
        try Faculty.query().delete()
        try Course.query().delete()
        try Schedule.query().delete()
        try Study.query().delete()
        try Year.query().delete()
        try StudyType.query().delete()
        try Pivot<Year, Course>.query().delete()
        try Pivot<Course, StudyType>.query().delete()
        try Pivot<Course, Study>.query().delete()
        try Pivot<Study, Year>.query().delete()

    }
    
    public static func start() {
        
        let queue = DispatchQueue(label: "opendataApiFetcherQueue")
        queue.asyncAfter(deadline: .now() + 1)  {
            do {
                print("fetching data...")
                try cleanAll()
                try storeFacultiesAndCoursesInformation()
            } catch{
                print("\(error)")
                print(UsiApiError.UsiApiParseError)
            }
            print("done!")
        }
    }
}
