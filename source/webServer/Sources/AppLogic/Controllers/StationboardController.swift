//
//  StationboardController.swift
//  Bachelor Project
//
//  Created by VaeVictis on 04.04.17.
//
//

import Foundation
import Vapor
import HTTP
import Fluent

public  class StationboardController {
    
    func getStationboard(_ req: Request) throws -> ResponseRepresentable {
        guard let busId = req.data["busId"]?.int, let stationid = req.data["stationId"]?.int else {
            throw Abort.badRequest
            
        }
        
        return try StationBoard.query().filter("bus_id", busId).filter("station_id", stationid).all().makeJSON()
    }
    
    
}
