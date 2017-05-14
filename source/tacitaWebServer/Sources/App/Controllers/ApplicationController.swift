//
//  ApplicationController.swift
//  applicationMicroservice
//
//  Created by VaeVictis on 11.05.17.
//
//

import Foundation
import Vapor
import HTTP
import Fluent

final class ApplicationController {
    
    static func getAll(_ req: Request) throws -> ResponseRepresentable {
        
        return try Application.query().all().makeJSON()
    }
    
    static func getOne(_ req: Request, application: Application) throws -> ResponseRepresentable {
        
        return try application.makeJSON()
    }
    

    static func create(_ req: Request) throws -> ResponseRepresentable {
        var application = try Application(request: req)
        
        if (try Application.query().filter("name", application.name).filter("url", application.url).first()) != nil {
            
            throw Abort.custom(status: .badRequest, message: ResourseError.resourceAlreadyExist("Application").description)
        }
        
        try application.save()
        
        return try application.makeJSON()
    }
    
    static func delete(_ req: Request, application: Application) throws -> ResponseRepresentable {
        try application.delete()
        return try application.makeJSON()
    }
    

}
