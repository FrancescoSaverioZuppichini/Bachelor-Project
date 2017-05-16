//
//  File.swift
//  Hello
//
//  Created by VaeVictis on 07.03.17.
//
//

import Foundation
import Vapor
import HTTP
import Fluent

final class PreferenceController {
    
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

    
    static func addOrUpdateUserPreference(_ req: Request) throws -> ResponseRepresentable {
        let userId =  req.userId

        var newPreference = try Preference.createOrUpdateFromRequest(req, userId: userId)
        
        try newPreference.save()
        
        return try newPreference.makeNode(context: ResourseContext.all).converted(to: JSON.self)
    }

}
