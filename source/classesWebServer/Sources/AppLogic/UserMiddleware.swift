//
//  File.swift
//  coursesWebServer
//
//  Created by VaeVictis on 07.05.17.
//
//


import Foundation
import Vapor
import HTTP
import Auth

final class UserMiddleware: Middleware {
    
    func respond(to req: Request, chainingTo next: Responder) throws -> Response {
        
        
        guard var userId =  req.query?["userId"]?.int ?? req.data["userId"]?.int  else {
            throw Abort.custom(status: .badRequest, message: "userId must be provided")
            
        }
        
        req.userId = userId
        
        let response = try next.respond(to: req)
        
        return response
    }
    
}


extension Request {
    var userId: Int {
        get { return storage["userId"] as! Int }
        set { storage["userId"] = newValue }
    }
}
