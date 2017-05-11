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

final class ApplicationController {
    
    static func getAll(_ req: Request) throws -> ResponseRepresentable {
        
        return try Application.query().all().makeJSON()
    }
    
    static func getOne(_ req: Request, application: Application) throws -> ResponseRepresentable {
        
        return try application.makeJSON()
    }
    
    static func update(_ req: Request, application: Application) throws -> ResponseRepresentable {
        
        var application = application
        
        let newApplication = try Application(request: req)
        
        application.name = newApplication.name
        application.url = newApplication.url
        
        try application.save()
        
        return try application.makeJSON()
        
    }
    
    static func create(_ req: Request) throws -> ResponseRepresentable {
        var application = try Application(request: req)
        
        if let oldApplication = try Application.query().filter("name", application.name).filter("url", application.url).first() {
            
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
