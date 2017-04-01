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
    
    public class func createIfNotExist(for userId: Node?, with stationId: Node?) throws -> Preference {
        
        return try Preference.query().filter("user_id", userId!).filter("station_id", stationId!).first() ?? create(for: userId, with: stationId)
        
    }
    
    public class func create(for userId: Node?, with stationId: Node?) throws -> Preference {
        var preference = Preference(for: userId, stationId: stationId)
        try preference.save()
        return preference
    }
    
    public func makeNode(context: Context) throws -> Node {
        return try Node(node: [
            "id": id,
            "user_id": userId,
            "station_id": stationId
            ])
    }
    
    public func makeJSON() throws -> JSON {
        let node = try makeNode()
        var json = JSON(node)
        
        json["buses"] = try buses().all().makeJSON()
        json["station"] = try station()?.makeJSON()
        
        return json
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
    
}

