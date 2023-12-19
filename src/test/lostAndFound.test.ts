import mongoose, { Types } from "mongoose";
import { expect } from "chai";
import "mocha";

import LostAndFound from "../dto/LostAndFound";
import { Config } from "../db_config";
import LostAndFoundDAO from "../dao/LostAndFoundDAO";

describe('Test LostAndFounds Collection', function() {
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

    it('Create, read, update and delete LostAndFound', async function() {
        const lostandfoundsDAO = new LostAndFoundDAO();
        const searchParameters = {
            roomId: new Types.ObjectId('656c8c5d7c82247b9b426d54'),
			item: "Bag with money",
			description: "Bag with 2 millions dollars was found in wardrobe",
            dateFound: new Date('2023-12-12'),
        };
        const updatedSearchParameters = { 
            roomId: new Types.ObjectId('656c8c5d7c82247b9b426d54'),
			item: "Bag with money",
			description: "Bag with 1 million dollars was found in wardrobe",
            dateFound: new Date('2023-12-12'),
        };

        // Clear same documents if exist
        await lostandfoundsDAO.deleteMany(searchParameters);
        await lostandfoundsDAO.deleteMany(updatedSearchParameters);

        // Create new LostAndFound
        const newLostAndFound = new LostAndFound(
            searchParameters.roomId,
            searchParameters.item,
            searchParameters.description,
            searchParameters.dateFound
        );
        console.log("New Lost And Found that should be added to database: " + newLostAndFound);
        await lostandfoundsDAO.insertMany(newLostAndFound.toILostAndFound());

        // Read new LostAndFound
        const foundLostAndFound = await lostandfoundsDAO.findOne(searchParameters);
        const foundLostAndFoundJSONStr = JSON.stringify(foundLostAndFound);
        console.log("Found lost and found in database: " + foundLostAndFound);
        expect(JSON.stringify(newLostAndFound), 'LostAndFounds not equals').equal('{' + foundLostAndFoundJSONStr.substring(foundLostAndFoundJSONStr.indexOf(',') + 1));

        // Update new LostAndFound
        await lostandfoundsDAO.updateOne(searchParameters, { description: updatedSearchParameters.description });
        const updatedLostAndFound = await lostandfoundsDAO.findOne(updatedSearchParameters);
        console.log("Updated lost and found: " + updatedLostAndFound);
        expect(updatedLostAndFound?.description, `Expect that lost and found description changed to ${updatedSearchParameters.description}, but got ${updatedLostAndFound?.description}`).equal(updatedSearchParameters.description);
        
        //Delete new LostAndFound
        await lostandfoundsDAO.deleteOne(updatedSearchParameters);
        const noLostAndFound = await lostandfoundsDAO.findOne(updatedSearchParameters);
        expect(noLostAndFound, 'No lost and found should be found').equal(null);
            
        // Clear after test
        await lostandfoundsDAO.deleteMany(searchParameters);
        await lostandfoundsDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
