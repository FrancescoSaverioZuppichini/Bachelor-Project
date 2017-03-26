//
//  StationController.swift
//  Bachelor Project
//
//  Created by VaeVictis on 26.03.17.
//
//

import Foundation
import Vapor
import HTTP
import Fluent

public class BusController {
    
    func getPassList(_ req: Request, bus: Bus) throws -> ResponseRepresentable {
        
        return try bus.makeNode(context: BusContext.passList).converted(to: JSON.self)
    }
    

}
