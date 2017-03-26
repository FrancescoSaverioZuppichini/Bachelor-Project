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
        return try user.preferences().makeJSON()
    }
    
    func addPreferenceToUser(_ req: Request,user: User) throws -> ResponseRepresentable {
        guard let stationId = req.data["stationId"]?.int, let busesRaw = req.data["buses"]?.array else { throw Abort.custom(status: .badRequest, message: "StationId and Buses cannot be empty.") }
        
        let numbers = busesRaw.flatMap { $0.int }
        // fetch/create station if don't exist
        let station = try Station.createIfNotExist(number: stationId, name: nil)
        // create -> save preference with that station
        var newPreference = try Preference(for: user.id, stationId: station.id)
        try newPreference.save()
        // create/fetch all the buses if someone do not exists
        let buses = try Bus.createAllIfNotExist(numbers: numbers)
        // use vapor magig to create the many -> many pivot relation
        try buses.forEach { bus in
            var pivot = Pivot<Preference, Bus>(newPreference,bus)
            try pivot.save()
        }
        
        let payload = try Node(node: ["userId": 1] )
        
        let json = JSON([
            "type" : "USER_NEARBY".makeNode(),
            "payload": payload
            ])
        
        try WebSocketServer.broadCast(text: json.serialize().string())

        return newPreference
    }
    
}
