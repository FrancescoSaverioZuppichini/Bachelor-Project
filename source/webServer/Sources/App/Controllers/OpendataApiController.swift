//
//  OpendataApiController.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Vapor
import HTTP

final class OpendataApiController {
    func getLocations(_ req: Request) throws -> ResponseRepresentable {
        guard let x = req.query?["x"]?.double,let y = req.query?["y"]?.double else {
            throw Abort.badRequest        }
        
        let opendataRes = try drop.client.get("http://transport.opendata.ch/v1/locations", query: ["x": x, "y": y])
        
        return opendataRes
    }
    func getConnections(_ req: Request) throws -> ResponseRepresentable {
        guard let from = req.query?["from"]?.string,let to = req.query?["to"]?.string else {
            throw Abort.badRequest        }
        
        let opendataRes = try drop.client.get("http://transport.opendata.ch/v1/connections", query: ["from": from, "to": to])
        
        return opendataRes
    }
    func getStationBoards(_ req: Request) throws -> ResponseRepresentable {
        guard let station = req.query?["station"]?.int else {
            throw Abort.badRequest
        }
        
        var query: [String: Int] = ["station": station]
        
        if let limit = req.query?["limit"]?.int {
            query["limit"] = limit
        }
        
        let opendataRes = try drop.client.get("http://transport.opendata.ch/v1/stationboard", query: query)

        return opendataRes
    }
}
