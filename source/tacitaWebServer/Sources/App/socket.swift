//
//  socket.swift
//  Hello
//
//  Created by VaeVictis on 07.03.17.
//
//

import Foundation
import Vapor
import HTTP

final class WebSocketServerMicroservice {
    static var sockets = [WebSocket]()
    
    static func broadCast(text:String) throws {
        try self.sockets.forEach { socket in
            print("Sending \(text) to \(socket)")
            try socket.send(text)
            
        }
    }
    
    static func start(drop:Droplet){
        print("start socket server")
        drop.socket("ws") { req, ws in
            self.sockets.append(ws)
            print("New WebSocket connected: \(ws)")
            
            // ping the socket to keep it open
            try background {
                while ws.state == .open {
                    try? ws.ping()
                    drop.console.wait(seconds: 10) // every 10 seconds
                }
            }
            
            ws.onText = { ws, text in
                
                print("Received: \(text)")
                try broadCast(text: text)  
            }
            
            ws.onClose = { ws, code, reason, clean in
                print("Closed.")
                // remove socket from array
                let i = sockets.index(where: {  $0 === ws })
                sockets.remove(at: i!)
            }
            
        }
        
    }
}


