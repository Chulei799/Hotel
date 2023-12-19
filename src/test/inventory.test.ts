import mongoose, { Types } from "mongoose";
import { expect } from "chai";
import "mocha";

import Inventory from "../dto/Inventory";
import { Config } from "../db_config";
import InventoryDAO from "../dao/InventoryDAO";

describe('Test Inventory Collection', function() {
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

    it('Create, read, update and delete Inventory', async function() {
        const inventorysDAO = new InventoryDAO();
        const searchParameters = { 
            name: "Safe",
            totalCount: 10,
            availableCount: 5
        };
        const updatedSearchParameters = { 
            name: "Safe",
            totalCount: 10,
            availableCount: 4
        };

        // Clear same documents if exist
        await inventorysDAO.deleteMany(searchParameters);
        await inventorysDAO.deleteMany(updatedSearchParameters);

        // Create new Inventory
        const newInventory = new Inventory(
            searchParameters.name,
            searchParameters.totalCount,
            searchParameters.availableCount
        );
        console.log("New Inventory that should be added to database: " + newInventory);
        await inventorysDAO.insertMany(newInventory.toIInventory());

        // Read new Inventory
        const foundInventory = await inventorysDAO.findOne(searchParameters);
        const foundInventoryJSONStr = JSON.stringify(foundInventory);
        console.log("Found inventory in database: " + foundInventory);
        expect(JSON.stringify(newInventory), 'Inventorys not equals').equal('{' + foundInventoryJSONStr.substring(foundInventoryJSONStr.indexOf(',') + 1));

        // Update new Inventory
        await inventorysDAO.updateOne(searchParameters, {availableCount: updatedSearchParameters.availableCount});
        const updatedInventory = await inventorysDAO.findOne(updatedSearchParameters);
        console.log("Updated inventory: " + updatedInventory);
        expect(updatedInventory?.availableCount, `Expect that inventory available count changed to ${updatedSearchParameters.availableCount}, but got ${updatedInventory?.availableCount}`).equal(updatedSearchParameters.availableCount);
        
        //Delete new Inventory
        await inventorysDAO.deleteOne(updatedSearchParameters);
        const noInventory = await inventorysDAO.findOne(updatedSearchParameters);
        expect(noInventory, 'No inventory should be found').equal(null);
            
        // Clear after test
        await inventorysDAO.deleteMany(searchParameters);
        await inventorysDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
