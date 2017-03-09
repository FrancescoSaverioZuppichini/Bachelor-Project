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
    public var exists: Bool = false
    
    public init(number: Int){
        self.number = number
    }
    
    public init(node: Node, in context: Context) throws{
        id = try node.extract("id")
        number = try node.extract("number")
    }
    
    public func makeNode(context: Context) throws -> Node {
        return try Node(node:[
            "id": id,
            "number": number
            ])
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("stations"){ stations in
            stations.id()
            stations.string("number")
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("stations")
    }
    
    
    /**
     Questo metodo fa cose
     - parameter number: asd
     - throws: tua madre
     - returns: Una stazione
     ```
     let a = 5
     ```
     
     [mario](https://google.com)
     
     *ciao*
     **ciao**
     # pippo
     ## pippo
     
     - attention: cazzo
    */
    public class func createIfNotExist(number: Int) throws -> Station {
        return try Station.query().filter("number", number).first() ?? create(number: number)
    }
    
    public class func create(number: Int) throws -> Station {
        var station = Station(number: number)
        try station.save()
        return station
    }
}
