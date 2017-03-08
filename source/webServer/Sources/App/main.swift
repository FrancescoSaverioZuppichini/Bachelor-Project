import Vapor
import VaporMySQL
import Fluent

let drop = Droplet()
try drop.addProvider(VaporMySQL.Provider.self)

drop.preparations.append(User.self)
drop.preparations.append(Preference.self)
drop.preparations.append(Station.self)
drop.preparations.append(Bus.self)
drop.preparations.append(Pivot<Preference,Bus>.self)

let opendataApiController = OpendataApiController()
let userController = UserController()

drop.get("display"){
    request in return try drop.view.make("index.html")
}

drop.group("api")
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

WebSocketServer.start(drop: drop)

drop.run()

