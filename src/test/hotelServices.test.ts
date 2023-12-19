import mongoose, { Types } from "mongoose";
import { expect } from "chai";
import "mocha";

import HotelServices from "../dto/HotelServices";
import { Config } from "../db_config";
import HotelServicesDAO from "../dao/HotelServicesDAO";

describe('Test Hotel Services Collection', function() {
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

    it('Create, read, update and delete Hotel Service', async function() {
        const hotelservicesDAO = new HotelServicesDAO();
        const searchParameters = { 
            name: "Skiing",
            price: 50
        };
        const updatedSearchParameters = { 
            name: "Skiing",
            price: 40
        };

        // Clear same documents if exist
        await hotelservicesDAO.deleteMany(searchParameters);
        await hotelservicesDAO.deleteMany(updatedSearchParameters);

        // Create new Hotel Service
        const newHotelService = new HotelServices(
            searchParameters.name,
            searchParameters.price
        );
        console.log("New Hotel Service that should be added to database: " + newHotelService);
        await hotelservicesDAO.insertMany(newHotelService.toIHotelServices());

        // Read new Hotel Service
        const foundHotelService = await hotelservicesDAO.findOne(searchParameters);
        const foundHotelServiceJSONStr = JSON.stringify(foundHotelService);
        console.log("Found hotel service in database: " + foundHotelService);
        expect(JSON.stringify(newHotelService), 'Hotel Services not equals').equal('{' + foundHotelServiceJSONStr.substring(foundHotelServiceJSONStr.indexOf(',') + 1));

        // Update new Hotel Service
        await hotelservicesDAO.updateOne(searchParameters, {price: updatedSearchParameters.price});
        const updatedHotelService = await hotelservicesDAO.findOne(updatedSearchParameters);
        console.log("Updated hotel service: " + updatedHotelService);
        expect(updatedHotelService?.price, `Expect that hotel service price changed to ${updatedSearchParameters.price}, but got ${updatedHotelService?.price}`).equal(updatedSearchParameters.price);
        
        //Delete new Hotel Service
        await hotelservicesDAO.deleteOne(updatedSearchParameters);
        const noHotelService = await hotelservicesDAO.findOne(updatedSearchParameters);
        expect(noHotelService, 'No hotel service should be found').equal(null);
            
        // Clear after test
        await hotelservicesDAO.deleteMany(searchParameters);
        await hotelservicesDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
