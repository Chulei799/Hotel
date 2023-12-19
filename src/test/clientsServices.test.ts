import mongoose, { Types } from "mongoose";
import { expect } from "chai";
import "mocha";

import { Config } from "../db_config";
import ClientsServicesDAO from "../dao/ClientsServicesDAO";
import ClientsServices from "../dto/ClientsServices";

describe("Test Clients Services Collection", function () {
    this.beforeAll(async () => {
        try {
            await mongoose.connect(
                `mongodb+srv://${Config.DB_USER}:${Config.DB_PASSWORD}@hotelcluster.oyed08v.mongodb.net/?retryWrites=true&w=majority`, { dbName: "hotel" });
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    });

    this.afterAll(async () => {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    });

    it("Create, read, update and delete Client", async function () {
        const clientsServicesDAO = new ClientsServicesDAO();
        const searchParameters = {
            clientId: new Types.ObjectId("656c90ae7c82247b9b426d65"),
            serviceId: new Types.ObjectId("6570ba24c39bb62034ea9fab"),
            date: new Date("2024-01-01"),
        };
        const updatedSearchParameters = {
            clientId: new Types.ObjectId("656c90ae7c82247b9b426d65"),
            serviceId: new Types.ObjectId("6570ba24c39bb62034ea9fab"),
            date: new Date("2024-01-10"),
        };

        // Clear same documents if exist
        await clientsServicesDAO.deleteMany(searchParameters);
        await clientsServicesDAO.deleteMany(updatedSearchParameters);

        // Create new Client Service
        const newClientsServices = new ClientsServices(
            searchParameters.clientId,
            searchParameters.serviceId,
            searchParameters.date
        );
        console.log("New Client service that should be added to database: " + newClientsServices);
        await clientsServicesDAO.insertMany(newClientsServices.toIClientsServices());

        // Read new Client Service
        const foundClientsServices = await clientsServicesDAO.findOne(searchParameters);
        const foundClientsServicesJSONStr = JSON.stringify(foundClientsServices);
        console.log("Found client service in database: " + foundClientsServices,);
        expect(JSON.stringify(newClientsServices), "Clients Services not equals").equal("{" + foundClientsServicesJSONStr.substring(foundClientsServicesJSONStr.indexOf(",") + 1));

        // Update new Client Service
        await clientsServicesDAO.updateOne(searchParameters, { date: updatedSearchParameters.date });
        const updatedClientsServices = await clientsServicesDAO.findOne(updatedSearchParameters);
        console.log("Updated client service: " + updatedClientsServices);
        expect(updatedClientsServices?.date.toDateString(), `Expect that client service date changed to ${updatedSearchParameters.date.toDateString()}, but got ${updatedClientsServices?.date.toDateString()}`).equal(updatedSearchParameters.date.toDateString());

        //Delete new Client Service
        await clientsServicesDAO.deleteOne(updatedSearchParameters);
        const noClient = await clientsServicesDAO.findOne(updatedSearchParameters);
        expect(noClient, "No client service should be found").equal(null);

        // Clear after test
        await clientsServicesDAO.deleteMany(searchParameters);
        await clientsServicesDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
