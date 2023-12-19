import mongoose from "mongoose";
import { expect } from "chai";
import "mocha";

import Clients from "../dto/Clients";
import { Config } from "../db_config";
import ClientsDAO from "../dao/ClientsDAO";

describe("Test Clients Collection", function () {
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

    it("Create, read, update and delete Client", async function () {
        const clientsDAO = new ClientsDAO();
        const searchParameters = {
            surname: "Doe",
            name: "John",
            email: "john.doe@gmail.com",
            phoneNumber: "+446069794045",
            birthday: new Date("2000-02-02"),
        };
        const updatedSearchParameters = {
            surname: "Doe",
            name: "Lorem",
            email: "john.doe@gmail.com",
            phoneNumber: "+446069794045",
            birthday: new Date("2000-02-02"),
        };

        // Clear same documents if exist
        await clientsDAO.deleteMany(searchParameters);
        await clientsDAO.deleteMany(updatedSearchParameters);

        // Create new Client
        const newClient = new Clients(
            searchParameters.surname,
            searchParameters.name,
            searchParameters.email,
            searchParameters.phoneNumber,
            searchParameters.birthday
        );
        console.log("New Client that should be added to database: " + newClient);
        await clientsDAO.insertMany(newClient.toIClients());

        // Read new Client
        const foundClient = await clientsDAO.findOne(searchParameters);
        const foundClientJSONStr = JSON.stringify(foundClient);
        console.log("Found client in database: " + foundClient);
        expect(JSON.stringify(newClient), "Clients not equals").equal("{" + foundClientJSONStr.substring(foundClientJSONStr.indexOf(",") + 1));

        // Update new Client
        await clientsDAO.updateOne(searchParameters, { name: updatedSearchParameters.name });
        const updatedClient = await clientsDAO.findOne(updatedSearchParameters);
        console.log("Updated client: " + updatedClient);
        expect(updatedClient?.name, `Expect that client name changed to ${updatedSearchParameters.name}, but got ${updatedClient?.name}`).equal(updatedSearchParameters.name);

        //Delete new Client
        await clientsDAO.deleteOne(updatedSearchParameters);
        const noClient = await clientsDAO.findOne(updatedSearchParameters);
        expect(noClient, "No client should be found").equal(null);

        // Clear after test
        await clientsDAO.deleteMany(searchParameters);
        await clientsDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
