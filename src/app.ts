import mongoose from 'mongoose';
import 'dotenv/config'
import ClientsModel from './model/ClientsModel';
import ClientsServicesModel from './model/ClientsServicesModel';
import EmployeesModel from './model/EmployeesModel';
import HotelServicesModel from './model/HotelServicesModel';
import InventoryModel from './model/InventoryModel';
import ReservationsModel from './model/ReservationsModel';
import RoomsInventoryModel from './model/RoomsInventoryModel';
import RoomsModel from './model/RoomsModel';
import assert from 'assert';

async function main() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hotelcluster.oyed08v.mongodb.net/?retryWrites=true&w=majority`, { dbName: 'hotel' });
    console.log('Connected to MongoDB');

    await testCRUDOperations();

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

async function testCRUDOperations() {
  //Find next Client id
  const nextID = (await ClientsModel.find().limit(1).sort({$natural:-1}))[0].clientId + 1;

  const newClient = {
    clientId: nextID,
    surname: 'Doe',
    name: 'John',
    email: 'john.doe@gmail.com',
    phoneNumber: '+446069794045',
    birthday: new Date('2000-02-02')
  }

  //Save new Client
  await new ClientsModel(newClient).save();

  //Find this client by clientId
  const foundClient = await ClientsModel.findOne({clientId: nextID});
  const foundClientJSONStr = JSON.stringify(foundClient)

  assert.equal('{' + foundClientJSONStr.substring(foundClientJSONStr.indexOf(',') + 1), JSON.stringify(newClient), 'Clients not equals');

  //Update client
  await ClientsModel.updateOne({clientId: nextID}, { name: 'Lorem' });

  //Find updated client by clientId
  const updatedClient = await ClientsModel.findOne({clientId: nextID});
  
  assert.equal(updatedClient?.name, 'Lorem', 'Expect that client name changed to Lorem, but got ' + updatedClient?.name);

  //Delete client
  await ClientsModel.deleteOne({clientId: nextID});

  const noClient = await ClientsModel.findOne({clientId: nextID});

  assert.equal(noClient, null, 'No client should be found')
}

main();
