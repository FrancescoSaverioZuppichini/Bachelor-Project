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
    public var color: String?
    
    public init(email: String) {
        self.email = email
    }
    
    public init(request req: Request) throws{
        guard let email = req.data["email"]?.string else{
            throw Abort.badRequest
        }
        
        if let color = req.data["color"]?.string {
            self.color = color
        }
        self.email = email
    }
    
    public init(node: Node, in context: Context) throws {
        id = try node.extract("id")
        email = try node.extract("email")
        color = try node.extract("color")

    }
    
    public func makeNode(context: Context) throws -> Node {
        var node = try Node(node: [
            "id": id,
            "email": email,
            "color": color
            ])
        
        switch context {
        case UserContext.enabledApp:
            node["apps"] = try getEnabledApps().all().makeNode(context: ResourseContext.snippet)
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("users") { users in
            users.id()
            users.string("email")
            users.string("color", optional: true)

        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("users")
    }
}


public enum UserContext: Context {
    case enabledApp
    
}

public extension User {
    
    func getEnabledApps() throws -> Siblings<Application> {
        return  try siblings()
    }
}
