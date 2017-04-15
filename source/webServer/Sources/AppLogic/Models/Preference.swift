//
//  Preference.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Vapor
import Fluent
import HTTP

public final class Preference: Model {
    public var id: Node?
    public var userId: Node?
    public var exists: Bool = false
    public var stationId: Node?

    public init(for userId: Node? = nil, stationId: Node?) {
        self.userId = userId
        self.stationId = stationId

    }

    public init(node: Node, in context: Context) throws {
        id = try node.extract("id")
        userId = try node.extract("user_id")
        stationId = try node.extract("station_id")

    }
    
    public static func createOrUpdateFromRequest(_ req: Request, user: User) throws  -> Preference {
        guard let stationId = req.data["stationId"]?.int, let busesRaw = req.data["buses"]?.array else { throw Abort.custom(status: .badRequest, message: "stationId and buses cannot be empty.") }
        
        if (busesRaw.count == 0) {
            throw Abort.custom(status: .badRequest, message: "There MUST be at least one bus")
        }
        
        let buses = busesRaw.flatMap { $0.object }
        
        guard let station = try Station.find(stationId) else {
            throw Abort.badRequest
        }
        
        // create -> save preference with that station
        let newPreference = try Preference.createIfNotExist(for: user.id, with: station.id)
        
        try Pivot<Preference,StationBoard>.query().filter("preference_id", newPreference.id!).delete()
        
        for busObj in buses {
            guard let busId = busObj["id"]?.int, let direction = busObj["to"]?.string else {
                throw Abort.badRequest
            }
            
            guard let stationBoard = try StationBoard.query().filter("bus_id",busId).filter("station_id", stationId).filter("to", direction).first() else {
                throw Abort.custom(status: .badRequest, message: "Cannot find any stationboard")
                
            }
            
//            try Pivot<Preference,StationBoard>.query().filter("preference_id", newPreference.id!).filter("stationboard_id", stationBoard.id!).first()?.delete()
            
            var newPivot = Pivot<Preference,StationBoard>(newPreference,stationBoard)
            try newPivot.save()
        }
        
        return newPreference
    }
    
    
    public class func createIfNotExist(for userId: Node?, with stationId: Node?) throws -> Preference {
        
        return try Preference.query().filter("user_id", userId!).filter("station_id", stationId!).first() ?? create(for: userId, with: stationId)
    }
    
    public class func create(for userId: Node?, with stationId: Node?) throws -> Preference {
        var preference = Preference(for: userId, stationId: stationId)
        try preference.save()
        return preference
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node =  try Node(node: [
            "id": id,
            "user_id": userId,
            "station_id": stationId,

            ])
        
        switch context {
        case PreferenceContext.all:
            node["buses"] = try stationboard().all().makeNode(context: StationBoardContext.bus)
            node["station"] = try station()?.makeNode()

        default:
            break
        }
        
        return node
    }
    
    
    public static func prepare(_ database: Database) throws {
        try database.create("preferences") { preferences in
            preferences.id()
            preferences.parent(User.self,optional: false)
            preferences.parent(Station.self,optional: false)
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("preferences")
    }
}

public extension Preference {
    public func buses() throws -> Siblings<Bus> {
        return try siblings()
    }
    
    public func station() throws -> Station? {
        return try parent(stationId).get()
    }
    
    public func stationboard() throws -> Siblings<StationBoard> {
        
        return try siblings()
    }
    
}

public enum PreferenceContext: Context {
    case all
}

