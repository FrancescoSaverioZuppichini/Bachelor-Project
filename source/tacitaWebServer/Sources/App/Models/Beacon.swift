//
//  Beacon.swift
//  authMicroService
//
//  Created by VaeVictis on 15.05.17.
//
//

import Vapor
import Fluent
import HTTP


public final class Beacon: Model,RequestInitializable {
    public var id: Node?
    public var beaconId: String
    public var displayId: Node
    public var exists: Bool = false
    
    public init(displayId: Node, beaconId: String) {
        self.displayId = displayId
        self.beaconId = beaconId
    }
    
    public init(request req: Request) throws{
        
        guard let displayId = req.data["displayId"]?.int, let beaconId = req.data["beaconId"]?.string else{
            throw Abort.badRequest
        }
        
        guard let display = try Display.find(displayId) else {
            throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Display").description)
        }
        
        self.displayId = display.id!
        self.beaconId = beaconId
    }
    
    public init(node: Node, in context: Context) throws {
        id = try node.extract("id")
        displayId = try node.extract("display_id")
        beaconId = try node.extract("beacon_id")
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node: [
            "id": id,
            "display_id": displayId,
            "beacon_id" : beaconId
            ])
        
        switch context {
        case ResourseContext.all:
            node["display"] = try getDisplay().makeNode()
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("beacons") { beacons in
            beacons.id()
            beacons.string("beacon_id")
            beacons.parent(Display.self)
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("users")
    }
}

public extension Beacon {
    
    func getDisplay() throws -> Display {
        return  try parent(displayId).get()!
    }
}
