import Vapor
import Fluent
import Foundation

public final class Display: Model, Preparation {
    public var id: Node?

    public init() {}
    
    public init(node: Node, in context: Context) throws {
        
        id = try node.extract("id")
    }
    
    public func makeNode(context: Context) throws -> Node {
        var display =  try Node(node: [
            "id": id
            ])
        
        switch context {
        case ResourseContext.all:
            display["apps"] = try getCurrentApp().all().makeNode(context: ResourseContext.snippet)
            display["beacons"] = try getBeacons().makeNode()
        default:
            break
            
        }
    
        return display
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("displays") { displays in
            displays.id()
        }

    }
    
    public static func revert(_ database: Database) throws {
        //
        try database.delete("displays")
    }
}

enum DisplayContext: Context {
    case currentApps
}

public extension Display {
    
    public func getCurrentApp() throws -> Siblings<Application> {

        return try siblings()
    }
    
    public func getBeacons() throws -> [Beacon] {
        return try children().all()
    }
}

