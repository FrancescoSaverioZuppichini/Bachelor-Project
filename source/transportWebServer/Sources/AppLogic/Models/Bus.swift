//
//  Bus.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//
import Foundation

import Vapor
import Fluent

public final class Bus: Model {
    public var id: Node?
    public var number: Int
    public var exists: Bool = false
    
    public static var entity = "buses"
    
    public init(number: Int){
        self.number = number
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        number = try node.extract("number")
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node:[
            "id": id,
            "number": number
            ])
        
        switch context {
        case BusContext.passList:
            node["passList"] = try passList().makeNode(context: PassContext.onlyStation)
        case BusContext.nextStop:
            node["stop"] = try getNextStop()?.makeNode()
     
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ buses in
            buses.id()
            buses.string("number")
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    
    
    public class func createAllIfNotExist(numbers: [Int]) throws -> [Bus] {
        return try numbers.map { number in
            try createIfNotExist(number: number)
        }
    }
    
    public class func createIfNotExist(number: Int) throws -> Bus {
        return try Bus.query().filter("number", number).first() ?? create(number: number)
    }
    
    public class func create(number: Int) throws -> Bus {
        var bus = Bus(number: number)
        try bus.save()
        return bus
    }
}

public enum BusContext: Context {
    case passList
    case nextStop
}

extension Bus {
    
    public func passList() throws -> [Pass] {
        let now = NSDate().timeIntervalSince1970

        return try getPasses().filter("departure_timestamp", .greaterThanOrEquals,now).limit(8).all()
    }
    
    public func getNextStop() throws -> Pass? {
        let now = NSDate().timeIntervalSince1970
        return try getPasses().filter("departure_timestamp", .greaterThanOrEquals,now).first()

//        return try getPasses().filter("arrival_timestamp", .greaterThanOrEquals,now).first()!
    }
    
    public func getPasses() throws -> Children<Pass> {
        return children()
    }
}
