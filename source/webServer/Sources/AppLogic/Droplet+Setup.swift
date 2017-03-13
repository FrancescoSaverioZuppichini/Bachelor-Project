import Vapor
import VaporMySQL
import Fluent

// Global drop of the module AppLogic
var drop: Droplet!

public func load(_ _drop: Droplet) throws {
    try _drop.addProvider(VaporMySQL.Provider.self)
    
    drop = _drop
    
    _drop.preparations.append(User.self)
    _drop.preparations.append(Preference.self)
    _drop.preparations.append(Station.self)
    _drop.preparations.append(Bus.self)
    _drop.preparations.append(Pivot<Preference,Bus>.self)

    _drop.middleware.append(ContentTypeMiddleware())
    
    let opendataApiController = OpendataApiController()
    let userController = UserController()
    
    _drop.get("display") {
        request in return try _drop.view.make("index.html")
    }
    
    _drop.group("api")
    {
        api in
        api.get("opendata/locations",handler: opendataApiController.getLocations)
        api.get("opendata/connections",handler: opendataApiController.getConnections)
        api.get("opendata/stationboards",handler: opendataApiController.getStationBoards)
        // users
        api.group("users"){
            users in
            users.get("",User.self,handler:userController.getUser)
            users.put(handler: userController.updateUser)
            users.put("nearby", handler: userController.notifyIsNearby)
            users.post(handler: userController.saveUser)
            users.delete(handler: userController.deleteUser)
            users.get(User.self,"preference",handler: userController.getPreferencesFromUser)
            users.post(User.self,"preference",handler: userController.addPreferenceToUser)
            
        }
    }
    
    WebSocketServer.start(drop: _drop)
}
