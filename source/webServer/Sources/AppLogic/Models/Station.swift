//
//  Station.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Foundation
import Fluent
import Vapor


public final class Station: Model {
    
    public var id: Node?
    public var number: Int
    public var name: String?
    public var exists: Bool = false
    
    public init(number: Int, name: String? = nil){
        self.number = number
        self.name = name
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        number = try node.extract("number")
        name = try node.extract("name")

    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "number": number,
            "name": name
            ])
        
        
        switch context {
            
        case StationContext.stationBoard:
            node["stationBoard"] = try stationBoard().makeNode(context: StationBoardContext.passes)
            
        case StationContext.buses:
            node["bus"] = try buses().makeNode()

        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("stations"){ stations in
            stations.id()
            stations.string("number")
            stations.string("name")

        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("stations")
    }
    
    
    public class func createIfNotExist(number: Int, name: String?) throws -> Station {
        return try Station.query().filter("number", number).first() ?? create(number: number, name: name)
    }
    
    public class func create(number: Int, name: String?) throws -> Station {
        var station = Station(number: number, name: name)
        try station.save()
        return station
    }
}

public enum StationContext: Context {
    case stationBoard
    case buses
}

extension Station {
    
    public func stationBoard() throws -> [StationBoard] {
        
        return try children().all()
    }
    
    public func buses() throws -> [Bus] {
        
        return try siblings().all()
    }
}
