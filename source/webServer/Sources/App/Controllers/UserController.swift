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
    
    func saveUser(_ req: Request) throws -> ResponseRepresentable {
        guard let email = req.data["email"]?.string else{
            throw Abort.badRequest
        }
        
        if (try User.query().filter("email", email).first() != nil){
            throw Abort.badRequest
        }
        
        var newUser = User(email: email)
        try newUser.save()
        
        return newUser
        
    }
    
    func deleteUser(_ req: Request) throws -> ResponseRepresentable {
        return "updateUser"
    }
    
    func addPreferenceToUser(_ req: Request,user: User) throws -> ResponseRepresentable {
        guard let stationId = req.data["stationId"]?.int, let busesRaw = req.data["buses"]?.array else { throw Abort.badRequest }
        
        let numbers = busesRaw.flatMap { $0.int }
        let station = try Station.createIfNotExist(number: stationId)
        var newPreference = try Preference(for: user.id, stationId: station.id)
        try newPreference.save()
        let buses = try Bus.createAllIfNotExist(numbers: numbers)
        
        try buses.forEach { bus in
            var pivot = Pivot<Preference, Bus>(newPreference,bus)
            try pivot.save()
        }
        
        return newPreference
    }
    
}
