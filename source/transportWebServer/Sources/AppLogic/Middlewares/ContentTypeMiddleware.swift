//
//  ContentTypeMiddleware.swift
//  Bachelor Project
//
//  Created by VaeVictis on 09.03.17.
//
//

import Foundation
import Vapor
import HTTP

class ContentTypeMiddleware: Middleware {
    
    func respond(to request: Request, chainingTo next: Responder) throws -> Response {
        if request.headers[.contentType] == nil { request.headers[.contentType] = "application/json" }
        return try next.respond(to: request)
    }
}
