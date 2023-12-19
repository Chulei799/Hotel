import mongoose, { Types } from "mongoose";
import { expect } from "chai";
import "mocha";

import RoomsInventory from "../dto/RoomsInventory";
import { Config } from "../db_config";
import RoomsInventoryDAO from "../dao/RoomsInventoryDAO";

describe('Test Rooms Inventory Collection', function() {
    this.beforeAll(async () => {
        try {
            await mongoose.connect(`mongodb+srv://${Config.DB_USER}:${Config.DB_PASSWORD}@hotelcluster.oyed08v.mongodb.net/?retryWrites=true&w=majority`, { dbName: 'hotel' });
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    });

    this.afterAll(async () => {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    });

    it('Create, read, update and delete Rooms Inventory', async function() {
        const roomsinventorysDAO = new RoomsInventoryDAO();
        const searchParameters = {
            inventoryId: new Types.ObjectId('6578c2a9efa7d0ea6b62a956'),
            roomId: new Types.ObjectId('656c8c5d7c82247b9b426d54'),
			count: 2,
			condition: "New",
			note: "Carpet with size 100x40cm"
        };
        const updatedSearchParameters = { 
            inventoryId: new Types.ObjectId('6578c2a9efa7d0ea6b62a956'),
            roomId: new Types.ObjectId('656c8c5d7c82247b9b426d54'),
			count: 3,
			condition: "New",
			note: "Carpet with size 100x40cm"
        };

        // Clear same documents if exist
        await roomsinventorysDAO.deleteMany(searchParameters);
        await roomsinventorysDAO.deleteMany(updatedSearchParameters);

        // Create new Room Inventory
        const newRoomsInventory = new RoomsInventory(
            searchParameters.inventoryId,
            searchParameters.roomId,
            searchParameters.count,
            searchParameters.condition,
            searchParameters.note
        );
        console.log("New Room Inventory that should be added to database: " + newRoomsInventory);
        await roomsinventorysDAO.insertMany(newRoomsInventory.toIRoomsInventory());

        // Read new Room Inventory
        const foundRoomsInventory = await roomsinventorysDAO.findOne(searchParameters);
        const foundRoomsInventoryJSONStr = JSON.stringify(foundRoomsInventory);
        console.log("Found room inventory in database: " + foundRoomsInventory);
        expect(JSON.stringify(newRoomsInventory), 'Rooms Inventory not equals').equal('{' + foundRoomsInventoryJSONStr.substring(foundRoomsInventoryJSONStr.indexOf(',') + 1));

        // Update new Room Inventory
        await roomsinventorysDAO.updateOne(searchParameters, {count: updatedSearchParameters.count});
        const updatedRoomsInventory = await roomsinventorysDAO.findOne(updatedSearchParameters);
        console.log("Updated room inventory: " + updatedRoomsInventory);
        expect(updatedRoomsInventory?.count, `Expect that room inventory count changed to ${updatedSearchParameters.count}, but got ${updatedRoomsInventory?.count}`).equal(updatedSearchParameters.count);
        
        //Delete new Room Inventory
        await roomsinventorysDAO.deleteOne(updatedSearchParameters);
        const noRoomsInventory = await roomsinventorysDAO.findOne(updatedSearchParameters);
        expect(noRoomsInventory, 'No room inventory should be found').equal(null);
            
        // Clear after test
        await roomsinventorysDAO.deleteMany(searchParameters);
        await roomsinventorysDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
