//
//  ResourceContextMiddleware.swift
//  authMicroService
//
//  Created by VaeVictis on 29.05.17.
//
//

import Foundation
import Vapor
import HTTP


final class ResourseContextMiddleware: Middleware {
    func respond(to request: Request, chainingTo next: Responder) throws -> Response {
        if(request.method == .get){
            
            request.context = ResourseContext.snippet
            
            if let context = request.query?["context"]?.string{
            
                if(context == "all") {request.context = ResourseContext.all }
                else if(context == "snippet") {request.context = ResourseContext.snippet }

            }
        }
        
        let response = try next.respond(to: request)
                
        return response
    }
}

extension Request {
    var context: ResourseContext{
        get { return storage["context"] as! ResourseContext }
        set { storage["context"] = newValue }
    }
}
