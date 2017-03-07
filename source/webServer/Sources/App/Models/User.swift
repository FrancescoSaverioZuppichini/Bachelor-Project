//
//  User.swift
//  Hello
//
//  Created by VaeVictis on 05.03.17.
//
//

import Vapor
import Fluent
import HTTP

final class User: Model,RequestInitializable {
    var id: Node?
    var email: String
    var exists: Bool = false
    
    init(email: String) {
        self.email = email
    }
    
    init(request req: Request) throws{
        guard let email = req.data["email"]?.string else{
            throw Abort.badRequest
        }
        
        self.email = email
    }
    
    init(node: Node, in context: Context) throws {
        id = try node.extract("id")
        email = try node.extract("email")
    }
    
    func makeNode(context: Context) throws -> Node {
        return try Node(node: [
            "id": id,
            "email": email
            ])
    }
    
    static func prepare(_ database: Database) throws {
        try database.create("users") { users in
            users.id()
            users.string("email")
        }
    }
    
    static func revert(_ database: Database) throws {
        try database.delete("users")
    }
}

extension User {
    func preferences() throws -> [Preference] {
        return try children().all()
    }
}
