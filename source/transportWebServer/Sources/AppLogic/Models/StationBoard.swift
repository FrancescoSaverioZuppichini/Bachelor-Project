//
//  StationBoard.swift
//  Bachelor Project
//
//  Created by VaeVictis on 26.03.17.
//
//

import Foundation
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


public final class StationBoard: Model {
    
    public var id: Node?
    public var to: String
    public var stationId: Node?
    public var busId: Node?
    public static var entity = "station_boards"
    public var exists: Bool = false
    
    public init(stationId: Node?, busId: Node?, to: String){
        self.stationId = stationId
        self.busId = busId
        self.to = to
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        stationId = try node.extract("station_id")
        busId = try node.extract("bus_id")
        
        to = try node.extract("to")
        
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "station_id": stationId?.int,
            "bus_id": busId?.int,
            "to": to
            ])
        
        switch context {
            
        case StationBoardContext.passes:
//            node["stop"] = try bus().getNextStop()?.makeNode()
            node["number"] = try bus().number.makeNode()
            node["stop"] = try nextPasses().first?.makeNode()
            //            node["passList"] = try bus().passList().makeNode()
            
        case StationBoardContext.all:
            node["bus"] = try bus().makeNode()
            node["station"] = try station().makeNode()
            
        case StationBoardContext.bus:
            let currentBus = try bus()
            node = try Node(node:[
                "id":   currentBus.id,
                "number": currentBus.number,
                "to": to
                ])
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("station_boards"){ stationBoards in
            stationBoards.id()
            stationBoards.string("station_id")
            stationBoards.string("bus_id")
            stationBoards.string("to")
            
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("station_boards")
    }
    
    
    public class func createIfNotExist(stationId: Node?,  busId: Node?, to: String) throws -> StationBoard {
        return try StationBoard.query().filter("station_id", stationId!).filter("bus_id", busId!).filter("to", to).first() ?? create(stationId: stationId, busId: busId, to: to)
    }
    
    public class func create(stationId: Node?, busId: Node?, to: String) throws -> StationBoard {
        var stationBoard = StationBoard(stationId: stationId, busId: busId, to: to)
        try stationBoard.save()
        return stationBoard
    }
}

public enum StationBoardContext: Context {
    case passes
    case bus
    case all
}

extension StationBoard {
    
    public func station() throws -> Station {
        return try parent(stationId).get()!
    }
    
    
    public func bus() throws -> Bus {
        return try parent(busId).get()!
    }
    
    public func nextPasses() throws -> [Pass] {
        let now = NSDate().timeIntervalSince1970
        return try passes().filter("departure_timestamp", .greaterThanOrEquals,now).filter("departure_timestamp",.lessThanOrEquals, now + 3600).limit(8).all()
        
    }
    
    public func passes() throws -> Siblings<Pass> {
        return try siblings()
    }
    
    
}
