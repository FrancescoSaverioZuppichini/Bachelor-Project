//
//  PreferenceController.swift
//  coursesWebServer
//
//  Created by VaeVictis on 07.05.17.
//
//

import Foundation
import Vapor
import Fluent
import HTTP


public final class PreferenceController {
    
    
    static func getPreferences(_ req: Request) throws -> ResponseRepresentable {
        let userId =  req.userId
        
        return try Preference.query().filter("user_id", userId).all().makeNode(context: ResourseContext.all).converted(to: JSON.self)
        
    }
    
    static func getPreference(_ req: Request, preference: Preference) throws -> ResponseRepresentable {
//        let userId =  req.userId
        
        return try preference.makeNode(context: ResourseContext.all).converted(to: JSON.self)
        
    }
    
    static func deletePreference(_ req: Request, preference: Preference) throws -> ResponseRepresentable {
        try preference.delete()
        
        return try preference.makeJSON()
    }
    
    static func editPreference(_ req: Request, preference: Preference) throws -> ResponseRepresentable {
        
        var preference = try Preference.find(preference.id!)!
        
        guard let facultyId = req.data["facultyId"]?.int else {
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("facultyId").description)
        }
        
        guard let faculty = try  Faculty.find(facultyId) else {
            throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Faculty").description)
            
        }
        
        
        if let type = req.data["type"]?.string {

            guard let study = try Study.query().filter("type", type).first() else {
                throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Study").description)
            }
            
            try Pivot<Preference,Study>.query().filter("preference_id", preference.id!).delete()

            var pivot = Pivot<Preference,Study>(preference,study)
            try pivot.save()
        }
        
        
        if let yearNumber = req.data["year"]?.int {
            print(yearNumber)
            try Pivot<Preference,Year>.query().filter("preference_id", preference.id!).delete()
        
                
                guard let yearModel = try Year.query().filter("yearNumber", yearNumber).first() else {
                    throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Year").description)
                    
                }
            
                var pivot = Pivot<Preference,Year>(preference,yearModel)
                try pivot.save()
            }
            
            
        
        
        if let studyType = req.data["studyType"]?.int {
            try Pivot<Preference,StudyType>.query().filter("preference_id", preference.id!).delete()
            guard let studyTypeModel = try StudyType.find(studyType) else {
                throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("studyType").description)
                
            }
            
            var pivot = Pivot<Preference,StudyType>(preference,studyTypeModel)
            try pivot.save()
        }
        
        if let courses = req.data["courses"]?.array {
            print(courses)
        }
        
        
        
        
        
        try preference.save()
        
        return  try preference.makeNode(context: ResourseContext.all).converted(to: JSON.self)
    }


    static func createPreference(_ req: Request) throws -> ResponseRepresentable {
        
        guard let facultyId = req.data["facultyId"]?.int else {
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("facultyId").description)
        }
        
        guard let faculty = try  Faculty.find(facultyId) else {
            throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Faculty").description)
            
        }
        
        var oldPreferenceQuery = try Preference.query()
        
        var preference = Preference(userId: req.userId, facultyId: faculty.id!)
        
        try preference.save()
        
        if let type = req.data["type"]?.string {
            guard let study = try Study.query().filter("type", type).first() else {
                throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Study").description)
            }
            
            var pivot = Pivot<Preference,Study>(preference,study)
            try pivot.save()
        }
        
//        if let years = req.data["years"]?.array {
//            for year in years {
//                
//                let yearNumber = year.int!
//                
//                guard let yearModel = try Year.query().filter("yearNumber", yearNumber).first() else {
//                    throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Year").description)
//
//                }
//                
//                var pivot = Pivot<Preference,Year>(preference,yearModel)
//                try pivot.save()
//            }
//            
//
//        }
        
        
        if let yearNumber = req.data["year"]?.int {
            print(yearNumber)
            try Pivot<Preference,Year>.query().filter("preference_id", preference.id!).delete()
            
            
            guard let yearModel = try Year.query().filter("yearNumber", yearNumber).first() else {
                throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Year").description)
                
            }
            
            var pivot = Pivot<Preference,Year>(preference,yearModel)
            try pivot.save()
        }

        if let studyType = req.data["studyType"]?.int {
            guard let studyTypeModel = try StudyType.find(studyType) else {
                throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("studyType").description)
                
            }
            
            var pivot = Pivot<Preference,StudyType>(preference,studyTypeModel)
            try pivot.save()
        }
        
        if let courses = req.data["courses"]?.array {
            print(courses)
        }
        
//        if let exists = try oldPreferenceQuery.first() {
//            throw Abort.custom(status: .badRequest, message: ResourseError.resourceAlreadyExist("Preference").description)
//                    }


        
        try preference.save()
        
        return  try preference.makeNode(context: ResourseContext.all).converted(to: JSON.self)
    }
}
