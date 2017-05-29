//
//  OpendataApiFetcher.swift
//  Bachelor Project
//
//  Created by VaeVictis on 29.03.17.
//
//
import Vapor
import Foundation
import Dispatch
import HTTP
import Fluent

/** This class fetches all the informations abous buses
 around a given location in order to cache them
 since the [opendata transport API](https://transport.opendata.ch/docs.html)
 allows only three request per second.
 In order it does:
 * get all the stations around a given geographic location and store them if needed
 * get all the statioboard leaving from each of those locations and store them if needed
 * get all the buses passing for each stations and store them if needed
 * remove all the pair bus-datetime in order to update them with a new one
 
 Since we can onlye ask the next 100 buses that pass for each location, a Timer is needed to update, one time a day
 all the information.
 */
public final class OpendataApiFetcher {
    
    public static var nStationBoard: Int = 100
    
    enum OpendataApiFetcherError: String, Error {
        case OpendataParseError = "Could not parse the data from https://transport.opendata.ch/docs.html"
    }
    
    public static func storePasses(from passList:[Polymorphic], with station: Station, with bus: Bus, in createdStationBoard: StationBoard) throws {
        for pass in passList {
            var pass = pass.object
            guard  let departureTimestamp = pass?["arrivalTimestamp"]?.double, let departure = pass?["arrival"]?.string   else {
                
                throw  OpendataApiFetcherError.OpendataParseError
            }
            
            
            let passModel = try Pass.createIfNotExist(bus: bus.id, through: station.id, arrivalTimestamp: nil, departureTimestamp: departureTimestamp, departure: departure)
            
            var pivot = Pivot<StationBoard,Pass>(createdStationBoard,passModel)
            try pivot.save()
            
        }
    }
    
    public static func storeStationBoardInformation(for stationBoard: Polymorphic, with station: Station) throws {
        
        let stationBoardObj = stationBoard.object
        
        guard let busNumber = stationBoardObj?["number"]?.int else {
            throw  OpendataApiFetcherError.OpendataParseError
        }
        
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
           
            let createdStationBoard = try StationBoard.createIfNotExist(stationId: station.id, busId: bus.id, to: to)
            
            let stopObj = stationBoardObj?["stop"]?.object
            
            guard  let departureTimestamp = stopObj?["departureTimestamp"]?.double, let departure = stopObj?["departure"]?.string   else {
                
                throw  OpendataApiFetcherError.OpendataParseError
            }
            
            let pass = try Pass.createIfNotExist(bus: bus.id, through: station.id, arrivalTimestamp: nil, departureTimestamp: departureTimestamp, departure: departure)
            
//           try storePasses(from: (stationBoardObj!["passList"]?.array)!, with: station, with: bus, in: createdStationBoard)
////
            var pivot = Pivot<StationBoard,Pass>(createdStationBoard,pass)
            try pivot.save()
        }
        
    }
    
    public static func storeStationBoardsInformation(for station: Station) throws {
        
        let query: [String: Int] = ["station": station.number, "limit": nStationBoard]
        
        // get all the buses for the station
        let opendataRes = try drop.client.get("http://transport.opendata.ch/v1/stationboard", query: query)
        
        if let stationBoards = opendataRes.makeResponse().data["stationboard"]?.array {
            
            for stationBoard in stationBoards {
                
                try storeStationBoardInformation(for: stationBoard, with: station)
                
            }
        }
    }
    
    public static func storeStationsInformation(for data: Polymorphic?) throws {
        guard let stations = data!.array else {
            throw  OpendataApiFetcherError.OpendataParseError
        }
        
        // iterate in all the station and save them if needed
        for station in stations {
            let stationObj = station.object
            
            guard let stationName = stationObj?["name"]?.string, let stationId = stationObj?["id"]?.int else{
                continue
            }
            
            let station = try Station.createIfNotExist(number: stationId, name: stationName)
            
            try storeStationBoardsInformation(for: station)
            
        }
        
    }
    
    public static func cleanCachedApiData() throws {
        
        // remove all previous information regarding bus and date
        try Pass.query().delete()
        try Pivot<StationBoard,Pass>.query().delete()
        try Pivot<Station,Bus>.query().delete()

        
    }
    
    public static func cacheOpendataApi() throws {
        print("fetching data...")
        
        try cleanCachedApiData()
//        Universita della Svizzera Italiana location
        let query: [String: CustomStringConvertible] = ["x": 46.0109180,"y": 8.9582230]
        
        let stations = try drop.client.get("http://transport.opendata.ch/v1/locations", query: query)
        
        try storeStationsInformation(for: stations.makeResponse().data["stations"])
        
        print("done.")
        
    }
    
    
    
    /** Start a timer in order to pool data from the
     [opendata transport API](https://transport.opendata.ch/docs.html)
     */
    public static func start() {
        let calendar = Calendar(identifier: .gregorian)
        let tomorrow = calendar.date(byAdding: .day, value: 1, to: Date())!
        var components = calendar.dateComponents([.year, .month, .day, .hour], from: tomorrow)
        components.hour = 5
        let tomorrowMorning = calendar.date(from: components)!
        
        let queue = DispatchQueue(label: "opendataApiFetcherQueue")
        queue.asyncAfter(deadline: .now() + 0.5)  {
            if #available(OSX 10.12, *) {
                let timer = Timer(fire: tomorrowMorning, interval: 60 * 60 * 24, repeats: true) { _ in
                    do {
                        print("diocanenen")
                        try OpendataApiFetcher.cacheOpendataApi()
                        
                    } catch{
                        print("Error during fetching")
                    }
                }
                timer.fire()
                
            } else {
                // Fallback on earlier versions
            }
        }
    }
    
}
