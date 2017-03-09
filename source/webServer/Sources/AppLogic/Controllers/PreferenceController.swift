//
//  File.swift
//  Hello
//
//  Created by VaeVictis on 07.03.17.
//
//

import Foundation

import HTTP
import Fluent

final class PreferenceController {
    
    
//    func getPreference(_ req: Request, preference: Preference) throws -> ResponseRepresentable {
//        return preference
//    }
//    
//    func updatePreference(_ req: Request, preference: Preference) throws -> ResponseRepresentable {
//        return "updatePreference"
//    }
//    
//    func saveUser(_ req: Request) throws -> ResponseRepresentable {
//        guard let email = req.data["email"]?.string else{
//            throw Abort.badRequest
//        }
//        
//        if (try User.query().filter("email", email).first() != nil){
//            throw Abort.badRequest
//        }
//        
//        var newUser = User(email: email)
//        try newUser.save()
//        
//        return newUser
//        
//    }
//    
//    func deletePreferece(_ req: Request, preference: Preference) throws -> ResponseRepresentable {
//        return "updateUser"
//    }
//    
//    func savePreference(_ req: Request,user: User) throws -> ResponseRepresentable {
//        guard let stationId = req.data["stationId"]?.int, let busesRaw = req.data["buses"]?.array else { throw Abort.badRequest }
//        
//        let numbers = busesRaw.flatMap { $0.int }
//        let station = try Station.createIfNotExist(number: stationId)
//        var newPreference = try Preference(for: user.id, stationId: station.id)
//        try newPreference.save()
//        let buses = try Bus.createAllIfNotExist(numbers: numbers)
//        
//        try buses.forEach { bus in
//            var pivot = Pivot<Preference, Bus>(newPreference,bus)
//            try pivot.save()
//        }
//        
//        return newPreference
//    }
    
}
