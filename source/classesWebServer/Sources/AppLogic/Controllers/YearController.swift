//
//  YearController.swift
//  coursesWebServer
//
//  Created by VaeVictis on 29.04.17.
//
//

import Foundation
import HTTP
import Vapor
import Fluent

final class YearController {
    
    public static func getYears(_ req: Request) throws -> ResponseRepresentable {
        return try Study.query().all().makeNode(context: ResourseContext.all).converted(to: JSON.self)
    }
}
