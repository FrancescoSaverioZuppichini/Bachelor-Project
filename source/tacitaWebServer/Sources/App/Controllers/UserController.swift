//
//  UserController.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Foundation
//
//  OpendataApiController.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Vapor
import HTTP
import Fluent

final class UserController {
    
    
    static func getUser(_ req: Request) throws -> ResponseRepresentable {
        
        var context = ResourseContext.snippet
        
        guard let email = req.query?["email"]?.string else{
            throw Abort.custom(status: .badRequest, message: "Email parameter cannot be empty.")
        }
        
        guard let user = try User.query().filter("email",email).first() else {
            throw Abort.custom(status: .notFound, message: "User not found")
        }
        
        if let reqContext =  req.query?["context"]?.string {
            if reqContext == "all" {
                context = ResourseContext.all
            }
        }
        
        return try user.makeNode(context: context).converted(to: JSON.self)
    }
    
    static func getOne(_ req: Request, user: User) throws -> ResponseRepresentable {
        var context: Context = ResourseContext.snippet
        
        if let reqContext =  req.query?["context"]?.string {
            switch reqContext {
            case "all":
                context = ResourseContext.all
            case "apps":
                context = UserContext.enabledApp
                
            default:
                break
            }
            
        }
        
        return try user.makeNode(context: context).converted(to: JSON.self)
    }
    
    
//    static func getUserApps(_ req: Request, user:User) throws -> ResponseRepresentable {
//    
//        return try user.makeNode(context: UserContext.enabledApp).converted(to:JSON.self)
//    }
    
    static func updateUser(_ req: Request, user: User) throws -> ResponseRepresentable {
        return "updateUser"
    }
    
    static func saveUser(_ req: Request) throws -> ResponseRepresentable {
        guard let email = req.data["email"]?.string else{
            throw Abort.custom(status: .badRequest, message: "Email parameter cannot be empty.")
        }
        
        if (try User.query().filter("email", email).first() != nil){
            throw Abort.custom(status: .badRequest, message: "User alreary exist.")
        }
        
        var newUser = User(email: email)
        try newUser.save()
        
        return newUser
        
    }
    
    static func deleteUser(_ req: Request, user: User) throws -> ResponseRepresentable {
        let userJSON = try user.makeJSON()
        try user.delete()
        return userJSON
    }
    
    
    static func toogleApp(_ req: Request, user: User, app: Application) throws -> ResponseRepresentable {
//        guard let appId = req.data["appId"]?.int else {
//            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("appId").description)
//        }
        
//        guard let app = try Application.find(appId) else {
//            throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Application").description)
//        }
        //TODO check if appId exists
        
        if let toogledApp = try Pivot<User,Application>.query().filter("user_id", user.id!).filter("application_id",app.id!).first(){
            
            try toogledApp.delete()
            
            return try "okay"
        }
        
        var pivot = Pivot<User,Application>(user,app)
       try  pivot.save()
        
        return try "okay"
        
    }

    

}
