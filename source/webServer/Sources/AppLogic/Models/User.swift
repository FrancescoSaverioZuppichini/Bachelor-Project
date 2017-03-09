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

public final class User: Model,RequestInitializable {
    public var id: Node?
    public var email: String
    public var exists: Bool = false
    
    public init(email: String) {
        self.email = email
    }
    
    public init(request req: Request) throws{
        guard let email = req.data["email"]?.string else{
            throw Abort.badRequest
        }
        
        self.email = email
    }
    
    public init(node: Node, in context: Context) throws {
        id = try node.extract("id")
        email = try node.extract("email")
    }
    
    public func makeNode(context: Context) throws -> Node {
        return try Node(node: [
            "id": id,
            "email": email
            ])
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("users") { users in
            users.id()
            users.string("email")
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("users")
    }
}

public extension User {
    public func preferences() throws -> [Preference] {
        return try children().all()
    }
}
