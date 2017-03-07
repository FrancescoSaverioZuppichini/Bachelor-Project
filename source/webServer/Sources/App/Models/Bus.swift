//
//  Bus.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Vapor
import Fluent

final class Bus: Model {
    var id: Node?
    var number: Int
    var exists: Bool = false
    
    static var entity = "buses"
    
    init(number: Int){
        self.number = number
    }
    
    init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        number = try node.extract("number")
    }
    
    func makeNode(context: Context) throws -> Node {
        return try Node(node:[
            "id": id,
            "number": number
            ])
    }
    
    static func prepare(_ database: Database) throws {
        try database.create(entity){ buses in
            buses.id()
            buses.string("number")
        }
    }
    
    static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
    

    class func createAllIfNotExist(numbers: [Int]) throws -> [Bus] {
        return try numbers.map { number in
            try createIfNotExist(number: number)
        }
    }
    
    class func createIfNotExist(number: Int) throws -> Bus {
        return try Bus.query().filter("number", number).first() ?? create(number: number)
    }
    
    class func create(number: Int) throws -> Bus {
        var bus = Bus(number: number)
        try bus.save()
        return bus
    }
}
