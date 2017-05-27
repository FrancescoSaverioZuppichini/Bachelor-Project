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
        
        return try stationBoard.makeNode(context: StationBoardContext.passes).converted(to: JSON.self)
    }
    
    func getDirections(_ req: Request) throws -> ResponseRepresentable {
        //TODO use built-in id from vapor
        guard let stationid = req.data["stationId"]?.int else {
            throw Abort.badRequest
        }
        
        let stationBoardQuery = try StationBoard.query().filter("station_id", stationid)
        
        if let busId = req.data["busId"]?.int {
            try stationBoardQuery.filter("bus_id", busId)
        }
        
        return try stationBoardQuery.all().makeNode(context: StationBoardContext.all).converted(to: JSON.self)
        
    }
    
    func getPasses(_ req: Request, bus: Bus) throws -> ResponseRepresentable {
        guard let direction = req.query?["direction"]?.string  else {
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("direction").description)
        }
        
//        guard let stationBoards = try StationBoard.query().filter("bus_id", bus.id!).filter("to",direction) else {
//            return ""
//        }
        
//        return try bus.getPasses().all().makeNode(context: PassContext.onlyStation).converted(to:JSON.self)
        return  try StationBoard.query().filter("bus_id", bus.id!).filter("to",direction).all().makeNode(context: StationBoardContext.all).converted(to: JSON.self)
//        return try stationBoard.passes().all().makeNode(context: PassContext.onlyStation).converted(to:JSON.self)
    }
}
