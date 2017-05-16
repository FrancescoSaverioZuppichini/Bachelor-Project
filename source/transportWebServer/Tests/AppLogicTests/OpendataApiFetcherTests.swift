//
//  StationBoard+Pass+Bus+StationTests.swift
//  BachelorProject
//
//  Created by VaeVictis on 21.04.17.
//
//

import Foundation
import XCTest
import HTTP
@testable import Vapor
@testable import AppLogic

class OpendataApiFetcherTests: AppLogicTests {
    
    override func setUp() {
        super.setUp()
        do {
            try Bus.query().delete()
            try StationBoard.query().delete()
            try Station.query().delete()
            try Pass.query().delete()
        }
        catch  {
            print("Could not initialize the database")
        }
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    /** Test the ability of OpendataApiFetcher
     to get data. This test do not test the quality of
     the getted data
     */
    func testApiFetcher() throws {
        
        let nPassBefore = try Pass.query().count()
        let nStationBefore = try Station.query().count()
        let nBusesBefore = try Bus.query().count()
        let stationBoardBefore = try StationBoard.query().count()
        
        XCTAssertTrue(nPassBefore == 0)
        XCTAssertTrue(nStationBefore == 0)
        XCTAssertTrue(stationBoardBefore == 0)
        XCTAssertTrue(nBusesBefore == 0)
        
        
        
        OpendataApiFetcher.nStationBoard = 1;
        
        try OpendataApiFetcher.cacheOpendataApi()
        
        let nPassAfter = try Pass.query().count()
        let nStationAfter = try Station.query().count()
        let nBusesAfter = try Bus.query().count()
        let stationBoardAfter = try StationBoard.query().count()
        
        
        XCTAssertFalse(nPassAfter == 0)
        XCTAssertFalse(nStationAfter == 0)
        XCTAssertFalse(nBusesAfter == 0)
        XCTAssertFalse(stationBoardAfter == 0)
        
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }
    
}
