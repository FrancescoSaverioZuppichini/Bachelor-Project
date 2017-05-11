import Vapor
import Fluent
import Foundation
import HTTP

final class Application: Model, RequestInitializable {
    var id: Node?
    var name: String
    var url: String
    var exists: Bool = false
    var entity: String = "applications"
    
    init(name: String, url: String) {
        self.name = name
         self.url = url
    }
    
    init(node: Node, in context: Context) throws {
        id = try node.extract("id")
        name = try node.extract("name")
        url = try node.extract("url")
    }
    
    init(request : Request) throws {
        guard let name = request.data["url"]?.string else {
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("url").description)
        }
        
        guard let url = request.data["name"]?.string else {
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("name").description)
        }
        
        self.name = name
        self.url = url
    }
    func makeNode(context: Context) throws -> Node {
        return try Node(node: [
            "id": id,
            "name": name,
            "url": url
            ])
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ faculties in
            faculties.id()
            faculties.string("name")
            faculties.string("url")
        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
}

