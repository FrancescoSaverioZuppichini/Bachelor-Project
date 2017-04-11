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
    
    public static func deletePreference(_ req: Request, preference: Preference) throws -> ResponseRepresentable {
        
        try Pivot<Preference,StationBoard>.query().filter("preference_id", preference.id!).delete()
        try preference.delete()

        return try preference.makeJSON()
    }
    

}
