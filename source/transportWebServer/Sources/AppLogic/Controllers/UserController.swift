////
////  UserController.swift
////  Hello
////
////  Created by VaeVictis on 05.03.17.
////
////
//
//import Foundation
////
////  OpendataApiController.swift
////  Hello
////
////  Created by VaeVictis on 05.03.17.
////
////
//
//import Vapor
//import HTTP
//import Fluent
//
//final class UserController {
//    
//    
//    func getUser(_ req: Request, user: User) throws -> ResponseRepresentable {
//        return user
//    }
//    
//    func updateUser(_ req: Request) throws -> ResponseRepresentable {
//        return "updateUser"
//    }
//    
//    func notifyIsNearby(_ req: Request) throws -> ResponseRepresentable {
//        // TODO some validation
//        
//        // {"type": "USER_NEARBY", "payload": {"userId": 1}}
//        let payload = try Node(node: ["userId": 1] )
//        
//        let json = JSON([
//            "type" : "USER_NEARBY".makeNode(),
//            "payload": payload
//            ])
//        
//        try WebSocketServer.broadCast(text: json.serialize().string())
//        
//        return "okay"
//    }
//    
//    func saveUser(_ req: Request) throws -> ResponseRepresentable {
//        guard let email = req.data["email"]?.string else{
//            throw Abort.custom(status: .badRequest, message: "Email parameter cannot be empty.")
//        }
//        
//        if (try User.query().filter("email", email).first() != nil){
//            throw Abort.custom(status: .badRequest, message: "User alreary exist.")
//        }
//        
//        var newUser = User(email: email)
//        try newUser.save()
//        return newUser
//        
//    }
//    
//    func deleteUser(_ req: Request) throws -> ResponseRepresentable {
//        return "deleteUserCalled"
//    }
//    z
//    func getPreferencesFromUser(_ req: Request, user:User) throws -> ResponseRepresentable {
//        return try user.preferences().makeNode(context: PreferenceContext.all).converted(to: JSON.self)
//    }
//    
//    func addOrUpdateUserPreference(_ req: Request,user: User) throws -> ResponseRepresentable {
//        var newPreference = try Preference.createOrUpdateFromRequest(req, user: user)
//        
//        try newPreference.save()
//        
//        let payload = try Node(node: ["userId": 1] )
//        
//        let json = JSON([
//            "type" : "USER_NEARBY".makeNode(),
//            "payload": payload
//            ])
//        
//        try WebSocketServer.broadCast(text: json.serialize().string())
//
//        return try newPreference.makeNode(context: PreferenceContext.all).converted(to: JSON.self)
//    }
//    
//
//}
