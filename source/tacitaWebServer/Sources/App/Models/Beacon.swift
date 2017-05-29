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
    public var displayId: Node?
    public var exists: Bool = false
    
    public init(displayId: Node?, beaconId: String) {
        self.displayId = displayId
        self.beaconId = beaconId
    }
    
    public init(request req: Request) throws {
        
        if let displayId = req.data["displayId"]?.int {
            guard let display = try Display.find(displayId) else {
                throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Display").description)
            }
            
            self.displayId = display.id
        }
        
        guard let beaconId = req.data["beaconId"]?.string else{
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("beaconId").description)
        }
        
        if let _ = try Beacon.query().filter("beacon_id", beaconId ).first() {
            throw Abort.custom(status: .badRequest, message: ResourseError.resourceAlreadyExist("Beacon").description)
        }
        
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
            node["display"] = try getDisplay()?.makeNode()
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("beacons") { beacons in
            beacons.id()
            beacons.string("beacon_id")
            beacons.parent(Display.self, optional: true)
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("users")
    }
}

public extension Beacon {
    
    func getDisplay() throws -> Display? {
        if let displayId = self.displayId {
            return  try parent(displayId).get()
        }
        return   nil
    }
}
