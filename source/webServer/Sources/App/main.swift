import Vapor
import VaporMySQL
import Fluent
import AppLogic

let drop = Droplet()
try load(drop)

drop.run()

