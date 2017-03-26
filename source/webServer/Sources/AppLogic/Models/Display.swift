import Vapor
import Fluent
import Foundation

public final class Display: Model, Preparation {
    public var id: Node?
    public var defaultStationId: Node?
    public  enum DisplayContext: Context {
        case all
    }
    
    public init(with defaultStation: Node? = nil) {
        self.defaultStationId = defaultStation
    }
    
    public init(node: Node, in context: Context) throws {
        
        id = try node.extract("id")
        defaultStationId  = try node.extract("station_id")
    }
    
    public func makeNode(context: Context) throws -> Node {
        var display =  try Node(node: [
            "id": id,
            "station_id": defaultStationId
            ])
        
        switch context {
        case DisplayContext.all:
            display["defaultStation"] = try defaultStation()?.makeNode()
        default:
            break
            
        }
    
        return display
    }
    
    public static func prepare(_ database: Database) throws {
        try database.create("displays") { displays in
            displays.id()
            displays.parent(Station.self,optional: false, default: nil)
        }

    }
    
    public static func revert(_ database: Database) throws {
        //
        try database.delete("displays")
    }
}

public extension Display {
    
    public func defaultStation() throws -> Station? {

        return try parent(defaultStationId).get()
    }
}

