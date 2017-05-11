import Vapor
import VaporMySQL


let drop = Droplet()
try drop.addProvider(VaporMySQL.Provider.self)


drop.preparations.append(Application.self)


drop.group("api") {
    api in
    api.group("application") {
        application in
        application.get("", handler: ApplicationController.getAll)
        application.get(Application.self,"", handler: ApplicationController.getOne)
        application.put(Application.self,"", handler: ApplicationController.update)
        application.post("", handler: ApplicationController.create)
        application.delete(Application.self,"", handler: ApplicationController.delete)

    }
}

drop.run()
