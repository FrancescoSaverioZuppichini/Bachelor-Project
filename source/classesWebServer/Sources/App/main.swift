import Vapor
import VaporMySQL
import Fluent
import AppLogic
import Foundation

let drop = Droplet()

try load(drop)

drop.run()
