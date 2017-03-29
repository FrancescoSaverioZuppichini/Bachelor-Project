//
//  OpendataApiFetcher.swift
//  Bachelor Project
//
//  Created by VaeVictis on 29.03.17.
//
//

import Foundation
import HTTP
import Fluent
public final class OpendataApiFetcher {
     public static func storePasses(from passList:[Polymorphic], with station: Station, with bus: Bus, in createdStationBoard: StationBoard) throws {
        for pass in passList {
            let passObj = pass.object
            
            guard let stopStationId = passObj?["station"]?.object?["id"]?.int, let arrivalTimestamp = passObj?["arrivalTimestamp"]?.double  else {
                continue
            }
            
            let pass = try Pass.createIfNotExist(bus: bus.id, through: station.id, arrivalTimestamp: arrivalTimestamp, departureTimestamp: nil)
            
            var pivot = Pivot<StationBoard,Pass>(createdStationBoard,pass)
            try pivot.save()
            
        }
    }
    
     public static func storeStationBoardInformation(for stationBoard: Polymorphic, with station: Station) throws {
        let stationBoardObj = stationBoard.object
        
        guard let busNumber = stationBoardObj?["number"]?.int else {
            print("Error parsing JSON, could not find a buss number")
            return
        }
        
        print(stationBoardObj!)
        let bus = try Bus.createIfNotExist(number: busNumber)
        
        // create the pivot iff it doesn't already exist
        if ((try Pivot<Station, Bus>.query().filter("station_id", station.id!).filter("bus_id", bus.id!).first()) == nil) {
            
            var pivot = Pivot<Station, Bus>(station,bus)
            try pivot.save()
            
        }
        
        // get the single stop (aka "stationBoard") obj in order to get
        // * the direction
        // * the passList of a bus
        if let to = stationBoardObj?["to"]?.string {
            
            var createdStationBoard = StationBoard(stationId: station.id, to: to)
            try createdStationBoard.save()
            
            let passList = stationBoardObj?["passList"]?.array
            // go through all the pass list of the current bus
            try storePasses(from: passList!, with: station, with: bus, in: createdStationBoard )
            
        }
        
    }
    
     public static func storeStationBoardsInformation(for station: Station) throws {
        
        let query: [String: Int] = ["station": station.number, "limit": 100]
        
        // get all the buses for the station
        let opendataRes = try drop.client.get("http://transport.opendata.ch/v1/stationboard", query: query)
        
        if let stationBoards = opendataRes.makeResponse().data["stationboard"]?.array {
            
            for stationBoard in stationBoards {
                
                try storeStationBoardInformation(for: stationBoard, with: station)
                
            }
        }
    }
    
    public static func cacheApiInformation(_ req: Request) throws -> ResponseRepresentable {
        
        let stations = try OpendataApiController.getLocations(req)
        let data = try stations.makeResponse().data["stations"]?.array
        
        // iterate in all the station and save them if needed
        for station in data! {
            let stationObj = station.object
            
            guard let stationName = stationObj?["name"]?.string, let stationId = stationObj?["id"]?.int else{
                continue
            }
            
            let station = try Station.createIfNotExist(number: stationId, name: stationName)
            
            try storeStationBoardsInformation(for: station)
            
        }
        return "okay"
        
    }
    
}
