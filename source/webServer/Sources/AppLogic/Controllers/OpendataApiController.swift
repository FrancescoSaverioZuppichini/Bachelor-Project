//
//  OpendataApiController.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Vapor
import HTTP
import Fluent

final class OpendataApiController {
    
    func cacheApiInformation(_ req: Request) throws -> ResponseRepresentable {
        
        let stations = try getLocations(req)
        let data = try stations.makeResponse().data["stations"]?.array
        
        // iterate in all the station and save them if needed
        for station in data! {
            let stationObj = station.object
            
            guard let stationName = stationObj?["name"]?.string, let stationId = stationObj?["id"]?.int else{
                continue
            }
            
            let station = try Station.createIfNotExist(number: stationId, name: stationName)
            
            let query: [String: Int] = ["station": stationId, "limit": 10]
            
            // get all the buses for the station
            let opendataRes = try drop.client.get("http://transport.opendata.ch/v1/stationboard", query: query)
            
            if let stationBoards = opendataRes.makeResponse().data["stationboard"]?.array {
                
                for stationBoard in stationBoards {
                    
                    let stationBoardObj = stationBoard.object

                    guard let busNumber = stationBoardObj?["number"]?.int else {
                        print("Error parsing JSON, could not find a buss number")
                        break
                    }
                    
                    let bus = try Bus.createIfNotExist(number: busNumber)
                    
                    // create the pivot iff it doesn't already exist
                    guard (try Pivot<Station, Bus>.query().filter("station_id", station.id!).filter("bus_id", bus.id!).first()) != nil else {
                        
                        var pivot = Pivot<Station, Bus>(station,bus)
                        try pivot.save()
                        
                        break
                    }
                    
                    if let to = stationBoardObj?["to"]?.string {
                        try StationBoard.createIfNotExist(stationId: station.id, to: to)
                    }

                    let passList = stationBoardObj?["passList"]?.array
                    // go through all the pass list of the current bus
                    for pass in passList! {
                        
                        let passObj = pass.object
                        
                        guard let stopStationId = passObj?["station"]?.object?["id"]?.int, let arrivalTimestamp = passObj?["arrivalTimestamp"]?.double  else {
                            continue
                        }
                        
                        let pass = try Pass.createIfNotExist(bus: bus.id, through: station.id, arrivalTimestamp: arrivalTimestamp, departureTimestamp: nil)
                        
                       
                    }
                    
                }
            }
            
        }
        
        return stations
        
    }
    
    func getLocations(_ req: Request) throws -> ResponseRepresentable {
        guard let x = req.query?["x"]?.double,let y = req.query?["y"]?.double else {
            throw Abort.badRequest        }
        
        let opendataRes = try drop.client.get("http://transport.opendata.ch/v1/locations", query: ["x": x, "y": y])
        
        return opendataRes
    }
    
    func getConnections(_ req: Request) throws -> ResponseRepresentable {
        guard let from = req.query?["from"]?.string,let to = req.query?["to"]?.string else {
            throw Abort.badRequest        }
        
        let opendataRes = try drop.client.get("http://transport.opendata.ch/v1/connections", query: ["from": from, "to": to])
        
        return opendataRes
    }
    
    func getStationBoards(_ req: Request) throws -> ResponseRepresentable {
        guard let station = req.query?["station"]?.int else {
            throw Abort.badRequest
        }
        
        var query: [String: Int] = ["station": station]
        
        if let limit = req.query?["limit"]?.int {
            query["limit"] = limit
        }
        
        let opendataRes = try drop.client.get("http://transport.opendata.ch/v1/stationboard", query: query)
        
        return opendataRes
    }
}
