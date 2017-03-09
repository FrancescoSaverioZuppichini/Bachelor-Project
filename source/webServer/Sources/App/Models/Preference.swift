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

final class Preference: Model {
    var id: Node?
    var userId: Node?
    var exists: Bool = false
    var stationId: Node?
    
    init(for userId: Node? = nil, stationId: Node?) throws {
        self.userId = userId
        self.stationId = stationId

    }
    

    init(node: Node, in context: Context) throws {
        id = try node.extract("id")
        userId = try node.extract("user_id")
        stationId = try node.extract("station_id")

    }
    
    func makeNode(context: Context) throws -> Node {
        return try Node(node: [
            "id": id,
            "user_id": userId,
            "station_id": stationId
            ])
    }
    
    func makeJSON() throws -> JSON {
        let node = try makeNode()
        var json = JSON(node)
        
        json["buses"] = try buses().makeJSON()
        json["station"] = try station()?.makeJSON()
        
        return json
    }
    
    static func prepare(_ database: Database) throws {
        try database.create("preferences") { preferences in
            preferences.id()
            preferences.parent(User.self,optional: false)
            preferences.parent(Station.self,optional: false)
        }
    }
    
    static func revert(_ database: Database) throws {
        try database.delete("preferences")
    }
}

extension Preference {
    func buses() throws -> [Bus] {
        return try siblings().all()
    }
    
    func station() throws -> Station? {
        return try parent(stationId).get()
    }
    
}

