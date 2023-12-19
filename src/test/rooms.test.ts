import mongoose from "mongoose";
import { expect } from "chai";
import "mocha";

import Rooms from "../dto/Rooms";
import { Config } from "../db_config";
import RoomsDAO from "../dao/RoomsDAO";
import { TypeOfAccomodation, TypeOfComfort } from "../model/RoomsModel";

describe("Test Rooms Collection", function () {
    this.beforeAll(async () => {
        try {
            await mongoose.connect(`mongodb+srv://${Config.DB_USER}:${Config.DB_PASSWORD}@hotelcluster.oyed08v.mongodb.net/?retryWrites=true&w=majority`, { dbName: "hotel" });
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    });

    this.afterAll(async () => {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    });

    it("Create, read, update and delete Room", async function () {
        const roomsDAO = new RoomsDAO();
        const searchParameters = {
            number: 404,
			price: 404,
        	typeOfAccommodation: TypeOfAccomodation.DOUBLE,
        	typeOfComfort: TypeOfComfort.DELUXE,
			bedsCount: 1,
			booked: true
        };
        const updatedSearchParameters = {
            number: 404,
			price: 500,
        	typeOfAccommodation: TypeOfAccomodation.DOUBLE,
        	typeOfComfort: TypeOfComfort.DELUXE,
			bedsCount: 1,
			booked: true
        };

        // Clear same documents if exist
        await roomsDAO.deleteMany(searchParameters);
        await roomsDAO.deleteMany(updatedSearchParameters);

        // Create new Room
        const newRoom = new Rooms(
            searchParameters.number,
            searchParameters.price,
            searchParameters.typeOfAccommodation,
            searchParameters.typeOfComfort,
            searchParameters.bedsCount,
            searchParameters.booked
        );
        console.log("New Room that should be added to database: " + newRoom);
        await roomsDAO.insertMany(newRoom.toIRooms());

        // Read new Room
        const foundRoom = await roomsDAO.findOne(searchParameters);
        const foundRoomJSONStr = JSON.stringify(foundRoom);
        console.log("Found room in database: " + foundRoom);
        expect(JSON.stringify(newRoom), "Rooms not equals").equal("{" + foundRoomJSONStr.substring(foundRoomJSONStr.indexOf(",") + 1));

        // Update new Room
        await roomsDAO.updateOne(searchParameters, { price: updatedSearchParameters.price });
        const updatedRoom = await roomsDAO.findOne(updatedSearchParameters);
        console.log("Updated room: " + updatedRoom);
        expect(updatedRoom?.price, `Expect that room price changed to ${updatedSearchParameters.price}, but got ${updatedRoom?.price}`).equal(updatedSearchParameters.price);

        //Delete new Room
        await roomsDAO.deleteOne(updatedSearchParameters);
        const noRoom = await roomsDAO.findOne(updatedSearchParameters);
        expect(noRoom, "No room should be found").equal(null);

        // Clear after test
        await roomsDAO.deleteMany(searchParameters);
        await roomsDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
