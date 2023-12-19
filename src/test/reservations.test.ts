import mongoose, { Types } from "mongoose";
import { expect } from "chai";
import "mocha";

import Reservations from "../dto/Reservations";
import { Config } from "../db_config";
import ReservationsDAO from "../dao/ReservationsDAO";
import { Status } from "../model/ReservationsModel";

describe('Test Reservations Collection', function() {
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

    it('Create, read, update and delete Reservation', async function() {
        const reservationsDAO = new ReservationsDAO();
        const searchParameters = { 
            clientId: new Types.ObjectId('656c90ae7c82247b9b426d65'),
            roomId: new Types.ObjectId('656c8c5d7c82247b9b426d54'),
            checkInDate: new Date('2024-01-03'),
			checkOutDate: new Date('2024-01-10'),
        	status: Status.PENDING
        };
        const updatedSearchParameters = { 
            clientId: new Types.ObjectId('656c90ae7c82247b9b426d65'),
            roomId: new Types.ObjectId('656c8c5d7c82247b9b426d54'),
            checkInDate: new Date('2024-01-03'),
			checkOutDate: new Date('2024-01-10'),
        	status: Status.CONFIRMED
        };

        // Clear same documents if exist
        await reservationsDAO.deleteMany(searchParameters);
        await reservationsDAO.deleteMany(updatedSearchParameters);

        // Create new Reservation
        const newReservation = new Reservations(
            searchParameters.clientId,
            searchParameters.roomId,
            searchParameters.checkInDate,
            searchParameters.checkOutDate,
            searchParameters.status
        );
        console.log("New Reservation that should be added to database: " + newReservation);
        await reservationsDAO.insertMany(newReservation.toIReservations());

        // Read new Reservation
        const foundReservation = await reservationsDAO.findOne(searchParameters);
        const foundReservationJSONStr = JSON.stringify(foundReservation);
        console.log("Found reservation in database: " + foundReservation);
        expect(JSON.stringify(newReservation), 'Reservations not equals').equal('{' + foundReservationJSONStr.substring(foundReservationJSONStr.indexOf(',') + 1));

        // Update new Reservation
        await reservationsDAO.updateOne(searchParameters, {status: updatedSearchParameters.status});
        const updatedReservation = await reservationsDAO.findOne(updatedSearchParameters);
        console.log("Updated reservation: " + updatedReservation);
        expect(updatedReservation?.status, `Expect that reservation status changed to ${updatedSearchParameters.status}, but got ${updatedReservation?.status}`).equal(updatedSearchParameters.status);
        
        //Delete new Reservation
        await reservationsDAO.deleteOne(updatedSearchParameters);
        const noReservation = await reservationsDAO.findOne(updatedSearchParameters);
        expect(noReservation, 'No reservation should be found').equal(null);
            
        // Clear after test
        await reservationsDAO.deleteMany(searchParameters);
        await reservationsDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
