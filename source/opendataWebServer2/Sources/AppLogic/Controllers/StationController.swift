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

public  class StationController {
    
    func getStations(_ req: Request) throws -> ResponseRepresentable {
        return try Station.all().makeJSON()
    }
    
    func getPassList(_ req: Request, station: Station) throws -> ResponseRepresentable {
        
        return try station.makeNode(context: StationContext.stationBoard).converted(to: JSON.self)
    }
    
    
    func getBuses(_ req: Request, station: Station) throws -> ResponseRepresentable {
        
        return try station.makeNode(context: StationContext.buses).converted(to: JSON.self)
    }
    
  }
