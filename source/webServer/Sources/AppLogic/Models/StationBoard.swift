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
    public static var entity = "station_boards"

    public init(stationId: Node?, to: String){
        self.stationId = stationId
        self.to = to
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        stationId = try node.extract("station_id")
        to = try node.extract("to")
        
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "station_id": stationId,
            "to": to
            ])
        
        switch context {
        case StationBoardContext.passes:
<<<<<<< HEAD
            node["passList"] = try passes().makeNode(context: PassContext.all)
=======
            node["passList"] = try getPasses().makeNode(context: PassContext.all)
>>>>>>> feature/smart_phone_site
        default:
            break
        }
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("station_boards"){ stationBoards in
            stationBoards.id()
            stationBoards.string("station_id")
            stationBoards.string("to")
            
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("station_boards")
    }
    
    
    public class func createIfNotExist(stationId: Node?, to: String) throws -> StationBoard {
        return try create(stationId: stationId, to: to)
//        return try StationBoard.query().filter("station_id", stationId!).first() ?? create(stationId: stationId, to: to)
    }
    
    public class func create(stationId: Node?,  to: String) throws -> StationBoard {
        var stationBoard = StationBoard(stationId: stationId, to: to)
        try stationBoard.save()
        return stationBoard
    }
}

public enum StationBoardContext: Context {
    case passes
    case buses
}

extension StationBoard {
    
    public func passes() throws -> [Pass] {
        return try siblings().all()
    }
   
}
