import Vapor
import VaporMySQL
import Fluent

let drop = Droplet()


try drop.addProvider(VaporMySQL.Provider.self)

WebSocketServerMicroservice.start(drop: drop)

drop.preparations.append(User.self)
drop.preparations.append(Application.self)
drop.preparations.append(Beacon.self)
drop.preparations.append(Display.self)
drop.preparations.append(Pivot<User,Application>.self)
drop.preparations.append(Pivot<Display,Application>.self)

drop.get("admin") {
    request in
    try drop.view.make("admin.html")
}

drop.get("") {
    request in
    try drop.view.make("index.html")
}



drop.group("api") {
    
    api in
    api.group(ResourseContextMiddleware()){
        api in
        api.group("user") {
            user in
            user.get("",handler: UserController.getUser)
            user.put(User.self, handler: UserController.updateUser)
            user.post(handler: UserController.saveUser)
            user.delete(User.self,handler: UserController.deleteUser)
            user.get(User.self,handler: UserController.getOne)
            user.put(User.self, "app",Application.self, handler: UserController.toogleApp)
            
        }
        
        api.group("application") {
            application in
            application.get("", handler: ApplicationController.getAll)
            application.get(Application.self,"", handler: ApplicationController.getOne)
            application.put(Application.self,"", handler: ApplicationController.edit)
            application.post("", handler: ApplicationController.create)
            application.delete(Application.self,"", handler: ApplicationController.delete)
        }
        
        api.group("display") {
            display in
            display.get("", handler: DisplayController.getAll)
            display.get(Display.self,"", handler: DisplayController.getOne)
            display.put(Display.self,"app",Application.self, handler: DisplayController.setCurrentApp)
            display.post("", handler: DisplayController.create)
            display.delete(Display.self,"", handler: DisplayController.delete)
            
        }
        
        api.group("beacon") {
            beacon in
            beacon.get("", handler: BeaconController.getAll)
            beacon.get("find", handler: BeaconController.getOneByBeaconId)
            beacon.get(Beacon.self,"", handler: BeaconController.getOne)
            beacon.put(Beacon.self,"", handler: BeaconController.edit)
            beacon.post("", handler: BeaconController.create)
            beacon.delete(Beacon.self,"", handler: BeaconController.delete)
            
        }
    }
}

drop.run()
