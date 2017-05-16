//
//  ResourseContext.swift
//  BachelorProject
//
//  Created by VaeVictis on 09.05.17.
//
//

import Foundation
import Vapor

public enum ResourseContext: Context {
    case all
    case snippet
    
}

enum ResourseError: Error, CustomStringConvertible {
    case parameterIsMissing(String)
    case resourceNotFoud(String)
    case resourceAlreadyExist(String)
    
    var description: String {
        switch self {
        case let .parameterIsMissing(parameter):
            return "Missing parameter \(parameter) in the request"
        case let .resourceNotFoud(name):
            return "Resourse \((name)) not found"
        case let .resourceAlreadyExist(name):
            return "Resourse \((name)) already exists"
            
        }
    }
}
