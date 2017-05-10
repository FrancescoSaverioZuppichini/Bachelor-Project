import Vapor
import VaporMySQL
import VaporPostgreSQL
import Fluent

// Global drop of the module AppLogic
var drop: Droplet!

public func load(_ _drop: Droplet) throws {
    
    drop = _drop
    
    #if os(Linux)
        try drop.addProvider(VaporPostgreSQL.Provider.self)
    #else
        try drop.addProvider(VaporMySQL.Provider.self)
    #endif
    
    drop.preparations.append(User.self)
    drop.preparations.append(Preference.self)
    drop.preparations.append(Station.self)
    drop.preparations.append(Bus.self)
    drop.preparations.append(Display.self)
    drop.preparations.append(Pass.self)
    drop.preparations.append(StationBoard.self)
    drop.preparations.append(Pivot<Station,Bus>.self)
    drop.preparations.append(Pivot<StationBoard,Pass>.self)
    drop.preparations.append(Pivot<Preference,Bus>.self)
    drop.preparations.append(Pivot<Preference,StationBoard>.self)

    drop.middleware.append(ContentTypeMiddleware())
    
    let opendataApiController = OpendataApiController()
    let displayController = DisplayController()
    let stationController = StationController()
    let busController = BusController()
    let stationboardController = StationboardController()
    
    
    drop.get("") {
        request in
        try _drop.view.make("index.html")
    }
    
    drop.group("api"){
        api in
        api.get("opendata/locations",handler: OpendataApiController.getLocations)
        api.get("opendata/connections",handler: opendataApiController.getConnections)
        api.get("opendata/stationboards",handler: opendataApiController.getStationBoards)
        // users
//        api.group("users"){
//            users in
//            users.get("",User.self,handler:userController.getUser)
//            users.put(handler: userController.updateUser)
//            users.put("nearby", handler: userController.notifyIsNearby)
//            users.post(handler: userController.saveUser)
//            users.delete(handler: userController.deleteUser)
//            users.get(User.self,"preference",handler: userController.getPreferencesFromUser)
//            users.post(User.self,"preference",handler: userController.addOrUpdateUserPreference)
//            users.put(User.self,"preference",handler: userController.addOrUpdateUserPreference)
//
//        }
        
        api.group(UserMiddleware()){
            user in
            user.group("preference") {
                preference in
                preference.get("", handler: PreferenceController.getPreferences)
                preference.get(Preference.self, "", handler: PreferenceController.getPreference)
                preference.put(handler: PreferenceController.addOrUpdateUserPreference)
                preference.post("", handler: PreferenceController.addOrUpdateUserPreference)
                preference.delete("",Preference.self, handler: PreferenceController.deletePreference)

            }
        }
    
        
        api.group("display") {
            display in
            display.get(Display.self,handler: displayController.getDisplay)
            display.put(Display.self, handler: displayController.editDisplay)
            display.post(handler: displayController.addDisplay)
        }
        
        api.group("station") {
            stations in
            stations.get("", handler: stationController.getStations)
            stations.get(Station.self,"stationboards", handler: stationController.getPassList)
            stations.get(Station.self,"buses", handler: stationController.getBuses)
        }
        
        api.group("stationboard") {
            stationboard in
            stationboard.get("", handler: stationboardController.getStationboard)
        }
        api.group("bus") {
            stations in
            stations.get(Bus.self,"passList", handler: busController.getPassList)
        }
    }
    
    WebSocketServer.start(drop: _drop)
}
