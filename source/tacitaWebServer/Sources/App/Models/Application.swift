import Vapor
import Fluent
import Foundation
import HTTP

public final class Application: Model, RequestInitializable {
    public var id: Node?
    var name: String
    var url: String
    var materialIcon: String
    var description_en: String?
    var description_it: String?

    
    public var exists: Bool = false
    var entity: String = "applications"
    
    init(name: String, url: String, materialIcon: String, description_en: String?, description_it: String?) {
        self.name = name
        self.url = url
        self.materialIcon = materialIcon
        self.description_en = description_en
        self.description_it = description_it

    }
    
    public init(node: Node, in context: Context) throws {
        id = try node.extract("id")
        name = try node.extract("name")
        url = try node.extract("url")
        materialIcon = try node.extract("material_icon")
        description_en = try node.extract("description_en")
        description_it = try node.extract("description_it")

    }
    
    public init(request : Request) throws {
        guard let name = request.data["name"]?.string else {
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("url").description)
        }
        
        guard let url = request.data["url"]?.string else {
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("name").description)
        }
        
        guard let materialIcon = request.data["material_icon"]?.string else {
            throw Abort.custom(status: .badRequest, message: ResourseError.parameterIsMissing("material_icon").description)
        }
        
        if let description_en = request.data["description_en"]?.string {
            self.description_en = description_en
        }
        
        if let description_it = request.data["description_it"]?.string {
            self.description_it = description_it
        }
        
        self.name = name
        self.url = url
        self.materialIcon = materialIcon
    }
    
    public func makeNode(context: Context) throws -> Node {
        var node =  try Node(node: [
            "id": id,
            "name": name,
            "url": url,
            "material_icon": materialIcon,
            "description_en": description_en,
            "description_it": description_it

            ])
        
        switch context {
        case ResourseContext.all:
            node["displays"] = try getDisplay().all().makeNode()
        default:
            break
        }
        
        return node
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create(entity){ faculties in
            faculties.id()
            faculties.string("name")
            faculties.string("url")
            faculties.string("material_icon")
            faculties.string("description_en", optional: true)
            faculties.string("description_it", optional: true)


        }
    }
    
    public static func revert(_ database: Database) throws {
        try database.delete(entity)
    }
}

extension Application {
    
    func getDisplay() throws -> Siblings<Display> {
        
        return try siblings()
        
    }
    
}

