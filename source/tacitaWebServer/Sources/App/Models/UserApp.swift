//
//  AppEnable.swift
//  authMicroService
//
//  Created by VaeVictis on 11.05.17.
//
//


import Vapor
import Fluent
import HTTP

public final class UserApp: Model {
    public var id: Node?
    public var userId: Node
    public var appId: Int
    public var exists: Bool = false
    public var entity = "userApps"
    
    public init(userId: Node, appId: Int) {
        self.userId = userId
        self.appId = appId
    }
    
    
    public init(node: Node, in context: Context) throws {
        id = try node.extract("id")
        userId = try node.extract("user_id")
        appId = try node.extract("app_id")
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node =  try Node(node: [
            "id": id,
            "user_id": userId,
            "app_id": appId
            ])
        
        switch context {
        case ResourseContext.snippet:
            node =  try Node(node: [
                "app_id": appId
                ])
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("userApps") { userApps in
            userApps.id()
            userApps.parent(User.self)
            userApps.int("app_id")
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete("userApps")
    }
}

public extension User {
    
}
