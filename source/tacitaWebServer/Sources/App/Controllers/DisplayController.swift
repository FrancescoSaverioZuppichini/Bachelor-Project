//
//  DisplayController.swift
//  authMicroService
//
//  Created by VaeVictis on 12.05.17.
//
//

import Foundation
import Vapor
import HTTP
import Fluent

final class DisplayController {
    
    static func getAll(_ req: Request) throws -> ResponseRepresentable {
        
        return try Display.query().all().makeJSON()
    }
    
    static func getOne(_ req: Request, display: Display) throws -> ResponseRepresentable {
        var context: Context = ResourseContext.snippet
        
        if let reqContext =  req.query?["context"]?.string {
            switch reqContext {
            case "all":
                context = ResourseContext.all
            case "apps":
                context = DisplayContext.currentApps

            default:
                break
            }
           
        }
        
        return try display.makeNode(context: context).converted(to: JSON.self)
    }
    
    static func create(_ req: Request) throws -> ResponseRepresentable {
        var newDisplay = Display()
        try newDisplay.save()
        return try newDisplay.makeJSON()
    }
    
    static func delete(_ req: Request, display: Display) throws -> ResponseRepresentable {
        try display.delete()
        return try display.makeJSON()
    }
    
    static func setCurrentApp(_ req: Request, display: Display, application: Application) throws -> ResponseRepresentable {
        
//        var node = try Node(node: [
//            "type": "DISPLAY_CHANGE_APP",
//            "data": try Node(node :[
//                "displayId": display.id!,
//                "appId": application.id!])
//            ])
        
        let json = "{\"type\":\"DISPLAY_CHANGE_APP\",\"payload\":{\"displayId\":\(display.id!.int!),\"appId\":\(application.id!.int!)}}"
        
        try WebSocketServerMicroservice.broadCast(text: json)
        
        if (try Pivot<Display,Application>.query().filter("display_id",display.id!).filter("application_id", application.id!).first()) != nil {
            throw Abort.custom(status: .found, message: ResourseError.resourceAlreadyExist("Display with that Application").description)
        }
        
        try Pivot<Display,Application>.query().filter("display_id",display.id!).all().forEach{ try $0.delete() }
        
        var newPivot = Pivot<Display,Application>(display,application)
        
        try newPivot.save()
        
       
        
        return try display.makeNode(context: DisplayContext.currentApps).converted(to: JSON.self)
    }

    
    
}
