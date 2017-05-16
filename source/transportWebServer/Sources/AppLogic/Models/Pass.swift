//
//  Pass.swift
//  Bachelor Project
//
//  Created by VaeVictis on 26.03.17.
//
//
import Vapor
import Fluent

public final class Pass: Model {
    
    public var id: Node?
    public var busId: Node?
    public var stationId: Node?
    public var arrivalTimestamp: Double?
    public var departure: String?
    public var departureTimestamp: Double?
    public var exists: Bool = false
    public static var entity = "passes"
    
    public init(bus busId: Node?, through stationId: Node?, arrivalTimestamp: Double?, departureTimestamp: Double?, departure: String?){
        self.busId = busId
        self.stationId = stationId
        self.arrivalTimestamp = arrivalTimestamp
        self.departureTimestamp = departureTimestamp
        self.departure = departure
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        busId = try node.extract("bus_id")
        stationId = try node.extract("station_id")
        arrivalTimestamp = try node.extract("arrival_timestamp")
        departureTimestamp = try node.extract("departure_timestamp")
        departure = try node.extract("departure")

    }
    
    public func makeNode(context: Context) throws -> Node {
        var node =  try Node(node:[
            "id": id,
            "arrival_timestamp": arrivalTimestamp,
            "departure_timestamp": departureTimestamp,
            "departure": departure

            ])
        
        switch context {
            
        case PassContext.all:
            node["bus"] = try bus()?.makeNode()
            node["station"] = try station()?.makeNode()
            
        case PassContext.onlyBus:
            node["bus"] = try bus()?.makeNode()
            
        case PassContext.onlyStation:
            node["station"] = try station()?.makeNode()
            
        default:
            node["bus_id"] = busId
            node["station_id"] = stationId
            
        }

        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ passes in
            passes.id()
            passes.string("bus_id")
            passes.string("station_id")
            passes.double("arrival_timestamp",optional: true)
            passes.double("departure_timestamp",optional: true)
            passes.string("departure",optional: true)

        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    
}

public enum PassContext: Context {
    case all
    case onlyBus
    case onlyStation
}

extension Pass {
    
    public static func createIfNotExist(bus busId: Node?, through stationId: Node?, arrivalTimestamp: Double?, departureTimestamp: Double?, departure: String?) throws -> Pass {
        
        var newPass = Pass(bus: busId, through: stationId, arrivalTimestamp: arrivalTimestamp, departureTimestamp: departureTimestamp,departure: departure)
        
        if let oldPass = try Pass.query().filter("bus_id", busId!).filter("station_id", stationId!).filter("departure_timestamp", departureTimestamp!).first() {
            print("pass already exists")
            return oldPass
        } else {
            try newPass.save()
            return newPass
        }
    }
}

extension Pass {
    
    public func station() throws -> StationBoard? {
        return try parent(stationId).get()
    }
    
    public func bus() throws -> Bus? {
        return try parent(busId).get()
    }
}
