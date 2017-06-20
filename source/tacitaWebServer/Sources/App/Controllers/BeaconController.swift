//
//  BeaconController.swift
//  authMicroService
//
//  Created by VaeVictis on 15.05.17.
//
//

import Foundation
import Vapor
import HTTP
import Fluent

final class BeaconController {
    
    static func getAll(_ req: Request) throws -> ResponseRepresentable {
        
        return try Beacon.query().all().makeJSON()
    }
    
    static func getOne(_ req: Request, beacon: Beacon) throws -> ResponseRepresentable {

        return try beacon.makeNode(context: ResourseContext.all).converted(to:JSON.self)
    }
    
    static func getOneByBeaconId(_ req: Request) throws -> ResponseRepresentable {
        guard let beaconId = req.query?["beaconId"]?.string else {
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("beaconId").description)
        }
        guard let beacon = try Beacon.query().filter("beacon_id",beaconId).first() else {
            throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Beacon").description)
        }
        
        return try beacon.makeJSON()
    }
    
    static func edit(_ req: Request, beacon: Beacon) throws -> ResponseRepresentable {
        var beacon = beacon
        
        beacon.displayId = nil
        
        if let displayId = req.data["display_id"]?.int {
            guard let display = try Display.find(displayId) else {
                throw Abort.custom(status: .notFound, message: ResourseError.resourceNotFoud("Display").description)
            }
            
            beacon.displayId = display.id
        }
        
        guard let beaconId = req.data["beacon_id"]?.string else{
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("beaconId").description)
        }
        
        beacon.beaconId = beaconId
        try beacon.save()
        
        return try  beacon.makeJSON()
        
    }
    
    static func create(_ req: Request) throws -> ResponseRepresentable {
        var newBeacon = try Beacon(request: req)
        
        try newBeacon.save()
        
        return try newBeacon.makeJSON()
    }
    
    
    static func delete(_ req: Request, beacon: Beacon) throws -> ResponseRepresentable {
        try beacon.delete()
        
        return try beacon.makeJSON()
    }
    
    
}
