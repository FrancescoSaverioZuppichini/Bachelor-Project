//
//  UserControllerTests.swift
//  Bachelor Project
//
//  Created by VaeVictis on 09.03.17.
//
//

import XCTest
import HTTP
@testable import Vapor
@testable import AppLogic

class UserControllerTests: AppLogicTests {

    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }

    func testPostUser() throws {
        
        let body = JSON([
            "email": "asd@asd.com"
            ])
        
        let numberOfUsersBefore = try User.query().count()
        
        let request = try Request(method: .post, uri: "/api/users", body: body.makeBody())

        let response = try drop.respond(to: request)
        
        let numberOfUsersAfter = try User.query().count()
        
        let user = try User.query().filter("email", contains: "asd@asd.com").first()
        
        
        XCTAssert(numberOfUsersBefore + 1 == numberOfUsersAfter, "There should be a new user")
        XCTAssert(user != nil, "There should be a new user")
        XCTAssert(response.status == .ok, "Should be 200")
        
        
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }

    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

}
