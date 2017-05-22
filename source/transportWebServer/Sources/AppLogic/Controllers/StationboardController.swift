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
    
    func getStationboard(_ req: Request, stationBoard: StationBoard) throws -> ResponseRepresentable {
//        guard let stationid = req.data["stationId"]?.int else {
//            throw Abort.badRequest
//        }
//        
//        let stationBoardQuery = try StationBoard.query().filter("station_id", stationid)
//        
//        if let busId = req.data["busId"]?.int {
//            try stationBoardQuery.filter("bus_id", busId)
//        }
 
        return try stationBoard.makeNode(context: StationBoardContext.passes).converted(to: JSON.self)
    }
    
    
}
