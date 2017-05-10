//
//  AppLogicTests.swift
//  
//
//  Created by VaeVictis on 09.03.17.
//
//

import XCTest
@testable import Vapor
@testable import AppLogic

class AppLogicTests: XCTestCase {

    var drop: Droplet!
    
    override func setUp() {
        super.setUp()
        drop = Droplet(arguments: ["dummy/path", "prepare"])
        try! load(drop)
        try! drop.runCommands()
        
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }

}
