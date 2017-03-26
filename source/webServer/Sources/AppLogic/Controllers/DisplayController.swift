//
//  DisplayController.swift
//  Bachelor Project
//
//  Created by VaeVictis on 24.03.17.
//
//

import Foundation

import Vapor
import HTTP
import Fluent

public final class DisplayController {
    func getDisplay(_ req: Request, display: Display) throws -> ResponseRepresentable {
        
        return try display.makeNode(context: Display.DisplayContext.all).converted(to: JSON.self)
        
    }
    
    func addDisplay(_ req: Request) throws -> ResponseRepresentable {
        guard let stationId = req.data["stationId"]?.int else { throw Abort.badRequest
        }
        // fetch/create station if don't exist
        let station = try Station.createIfNotExist(number: stationId,name: nil)
        print(station)
        var newDisplay = Display(with: station.id);
        try newDisplay.save()
        
        return try newDisplay.makeNode(context: Display.DisplayContext.all).converted(to: JSON.self)

    }
}
