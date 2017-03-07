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

final class Station: Model{
    var id: Node?
    var number: Int
    var exists: Bool = false
    
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
        try database.create("stations"){ stations in
            stations.id()
            stations.string("number")
        }
    }
    
    static func revert(_ database: Database) throws {
        try database.delete("stations")
    }
    
    
    class func createIfNotExist(number: Int) throws -> Station {
        return try Station.query().filter("number", number).first() ?? create(number: number)
    }
    
    class func create(number: Int) throws -> Station {
        var station = Station(number: number)
        try station.save()
        return station
    }
}
