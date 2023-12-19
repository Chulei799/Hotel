import mongoose, { Types } from "mongoose";
import { expect } from "chai";
import "mocha";

import Feedback from "../dto/Feedback";
import { Config } from "../db_config";
import FeedbackDAO from "../dao/FeedbackDAO";

describe('Test Feedbacks Collection', function() {
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

    it('Create, read, update and delete Feedback', async function() {
        const feedbacksDAO = new FeedbackDAO();
        const searchParameters = { 
            clientId: new Types.ObjectId('656c90ae7c82247b9b426d65'),
            roomId: new Types.ObjectId('656c8c5d7c82247b9b426d54'),
            rating: 10,
            comment: "Best weekends in my life!",
            date: new Date('2023-12-12')
        };
        const updatedSearchParameters = { 
            clientId: new Types.ObjectId('656c90ae7c82247b9b426d65'),
            roomId: new Types.ObjectId('65788a4e9fc603fad123857c'),
            rating: 10,
            comment: "Best weekends in my life!",
            date: new Date('2023-12-12')
        };

        // Clear same documents if exist
        await feedbacksDAO.deleteMany(searchParameters);
        await feedbacksDAO.deleteMany(updatedSearchParameters);

        // Create new Feedback
        const newFeedback = new Feedback(
            searchParameters.clientId,
            searchParameters.roomId,
            searchParameters.rating,
            searchParameters.date,
            searchParameters.comment
        );
        console.log("New Feedback that should be added to database: " + newFeedback);
        await feedbacksDAO.insertMany(newFeedback.toIFeedbacks());

        // Read new Feedback
        const foundFeedback = await feedbacksDAO.findOne(searchParameters);
        const foundFeedbackJSONStr = JSON.stringify(foundFeedback);
        console.log("Found feedback in database: " + foundFeedback);
        expect(JSON.stringify(newFeedback), 'Feedbacks not equals').equal('{' + foundFeedbackJSONStr.substring(foundFeedbackJSONStr.indexOf(',') + 1));

        // Update new Feedback
        await feedbacksDAO.updateOne(searchParameters, {roomId: updatedSearchParameters.roomId});
        const updatedFeedback = await feedbacksDAO.findOne(updatedSearchParameters);
        console.log("Updated feedback: " + updatedFeedback);
        expect(updatedFeedback?.roomId.toString(), `Expect that feedback roomId changed to ${updatedSearchParameters.roomId.toString()}, but got ${updatedFeedback?.roomId.toString()}`).equal(updatedSearchParameters.roomId.toString());
        
        //Delete new Feedback
        await feedbacksDAO.deleteOne(updatedSearchParameters);
        const noFeedback = await feedbacksDAO.findOne(updatedSearchParameters);
        expect(noFeedback, 'No feedback should be found').equal(null);
            
        // Clear after test
        await feedbacksDAO.deleteMany(searchParameters);
        await feedbacksDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
