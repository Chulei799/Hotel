import mongoose from "mongoose";
import { expect } from "chai";
import "mocha";

import ClientsModel from "../model/ClientsModel";
import Clients from "../dto/Clients";
import { Config } from "../db_config";

describe('Test Clients Collection', function() {
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

    it('Create, read, update and delete Client', async function() {
        //Clear clients that will be added in test
        await ClientsModel.deleteMany({ surname: 'Doe', name: 'Lorem', phoneNumber: '+446069794045', birthday: new Date('2000-02-02') });

        const newClient = new Clients('Doe', 'John', 'john.doe@gmail.com', '+446069794045', new Date('2000-02-02'))
        
        //Save new Client
        await ClientsModel.insertMany(newClient);
        
        //Find this client by surname and name
        const foundClient = await ClientsModel.findOne({ surname: 'Doe', name: 'John', phoneNumber: '+446069794045', birthday: new Date('2000-02-02') });
        const foundClientJSONStr = JSON.stringify(foundClient);
        
        expect(JSON.stringify(newClient), 'Clients not equals').equal('{' + foundClientJSONStr.substring(foundClientJSONStr.indexOf(',') + 1));
        
        //Update client
        await ClientsModel.updateOne({ surname: 'Doe', name: 'John', phoneNumber: '+446069794045', birthday: new Date('2000-02-02') }, { name: 'Lorem' });
        
        //Find updated client by surname and name
        const updatedClient = await ClientsModel.findOne({ surname: 'Doe', name: 'Lorem', phoneNumber: '+446069794045', birthday: new Date('2000-02-02') });
          
        expect(updatedClient?.name, 'Expect that client name changed to Lorem, but got ' + updatedClient?.name).equal('Lorem');
        
        //Delete client
        await ClientsModel.deleteOne({ surname: 'Doe', name: 'Lorem', phoneNumber: '+446069794045', birthday: new Date('2000-02-02') });
        
        const noClient = await ClientsModel.findOne({ surname: 'Doe', name: 'Lorem', phoneNumber: '+446069794045', birthday: new Date('2000-02-02') });
        
        expect(noClient, 'No client should be found').equal(null);
    }).timeout(10000);
  });