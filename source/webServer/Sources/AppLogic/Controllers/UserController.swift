//
//  UserController.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Foundation
//
//  OpendataApiController.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Vapor
import HTTP
import Fluent

final class UserController {
    
    
    func getUser(_ req: Request, user: User) throws -> ResponseRepresentable {
        return user
    }
    
    func updateUser(_ req: Request) throws -> ResponseRepresentable {
        return "updateUser"
    }
    
    func notifyIsNearby(_ req: Request) throws -> ResponseRepresentable {
        // TODO some validation
        
        // {"type": "USER_NEARBY", "payload": {"userId": 1}}
        let payload = try Node(node: ["userId": 1] )
        
        let json = JSON([
            "type" : "USER_NEARBY".makeNode(),
            "payload": payload
            ])
        
        try WebSocketServer.broadCast(text: json.serialize().string())
        
        return "okay"
    }
    
    func saveUser(_ req: Request) throws -> ResponseRepresentable {
        guard let email = req.data["email"]?.string else{
            throw Abort.custom(status: .badRequest, message: "Email parameter cannot be empty.")
        }
        
        if (try User.query().filter("email", email).first() != nil){
            throw Abort.custom(status: .badRequest, message: "User alreary exist.")
        }
        
        var newUser = User(email: email)
        try newUser.save()
        return newUser
        
    }
    
    func deleteUser(_ req: Request) throws -> ResponseRepresentable {
        return "deleteUserCalled"
    }
    
    func getPreferencesFromUser(_ req: Request, user:User) throws -> ResponseRepresentable {
        return try user.preferences().makeNode(context: PreferenceContext.all).converted(to: JSON.self)
    }
    
    func addPreferenceToUser(_ req: Request,user: User) throws -> ResponseRepresentable {
        guard let stationId = req.data["stationId"]?.int, let busesRaw = req.data["buses"]?.array else { throw Abort.custom(status: .badRequest, message: "StationId and Buses cannot be empty.") }
        
        if (busesRaw.count == 0) {
            throw Abort.custom(status: .badRequest, message: "There MUST be at least one bus")
        }
        
        let buses = busesRaw.flatMap { $0.object }
        
        guard let station = try Station.find(stationId) else {
            throw Abort.badRequest
        }
        
        // create -> save preference with that station
        var newPreference = try Preference.createIfNotExist(for: user.id, with: station.id)
        
//        try newPreference.stationboard().delete()
        
        for busObj in buses {
            guard let busId = busObj["id"]?.int, let direction = busObj["to"]?.string else {
                    throw Abort.badRequest
            }
            
            guard let stationBoard = try StationBoard.query().filter("bus_id",busId).filter("station_id", stationId).filter("to", direction).first() else {
                throw Abort.custom(status: .badRequest, message: "Cannot find any stationboard")

            }
            
            try Pivot<Preference,StationBoard>.query().filter("preference_id", newPreference.id!).filter("stationboard_id", stationBoard.id!).first()?.delete()
            
            var newPivot = Pivot<Preference,StationBoard>(newPreference,stationBoard)
            try newPivot.save()
        }
        
        try newPreference.save()
        
        let payload = try Node(node: ["userId": 1] )
        
        let json = JSON([
            "type" : "USER_NEARBY".makeNode(),
            "payload": payload
            ])
        
        try WebSocketServer.broadCast(text: json.serialize().string())

        return try newPreference.makeNode(context: PreferenceContext.all).converted(to: JSON.self)
    }
    
}
