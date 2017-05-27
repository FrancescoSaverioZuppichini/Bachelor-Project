//
//  Droplet+Setup.swift
//  coursesWebServer
//
//  Created by VaeVictis on 24.04.17.
//
//

import Foundation
import Vapor
import VaporMySQL
import Fluent

var drop: Droplet!

public func load(_ _drop: Droplet) throws {
    
    drop = _drop
    
    
    try drop.addProvider(VaporMySQL.Provider.self)
    
    drop.preparations.append(Course.self)
    drop.preparations.append(Schedule.self)
    drop.preparations.append(Faculty.self)
    drop.preparations.append(Year.self)
    drop.preparations.append(Study.self)
    drop.preparations.append(StudyType.self)
    drop.preparations.append(Preference.self)

    drop.preparations.append(Pivot<Course,Year>.self)
    drop.preparations.append(Pivot<Course,Study>.self)
    drop.preparations.append(Pivot<Course,StudyType>.self)
    drop.preparations.append(Pivot<Study,Year>.self)
    
    drop.preparations.append(Pivot<Preference, Year>.self)
    drop.preparations.append(Pivot<Preference, Course>.self)
    drop.preparations.append(Pivot<Preference, Study>.self)
    drop.preparations.append(Pivot<Preference, StudyType>.self)

//    USIAPIFetcher.start()
    
    drop.get("") {
        request in
        try _drop.view.make("index.html")
    }
    
    drop.group("api") { api in
        api.group("course") { course in
            
            course.get(Course.self, handler: CourseController.getCourse)
            course.get(Course.self, "/schedules", handler: CourseController.getSchedules)
            course.get("/search", handler: CourseController.search)

            
        }
        
        api.group(UserMiddleware()) {
            user in
            user.group("preference") {
                preference in
                preference.get("", handler: PreferenceController.getPreferences)
                preference.get(Preference.self, "", handler: PreferenceController.getPreference)
                preference.put(Preference.self, "", handler: PreferenceController.editPreference)
                preference.post("", handler: PreferenceController.createPreference)
                preference.delete("",Preference.self, handler: PreferenceController.deletePreference)

            }
        }
        
        api.group("faculty") { faculty in
            
            faculty.get("", handler: FacultyController.getFaculties)
            faculty.get(Faculty.self, handler: FacultyController.getFaculty)
            faculty.get(Faculty.self,"/courses", handler: FacultyController.getCourses)
            faculty.get(Faculty.self,"/studies", handler: FacultyController.getStudies)

        }
        
        api.group("year") { year in
            year.get("", handler: YearController.getYears)
        }
        
    }
       
}
