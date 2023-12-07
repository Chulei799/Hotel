import mongoose from 'mongoose';
import 'dotenv/config'
import ClientsModel, { IClients } from './model/ClientsModel';
import ClientsServicesModel, { IClientsServices } from './model/ClientsServicesModel';
import EmployeesModel, { IEmployees } from './model/EmployeesModel';
import HotelServicesModel, { IHotelServices } from './model/HotelServicesModel';
import InventoryModel, { IInventory } from './model/InventoryModel';
import ReservationsModel, { IReservations } from './model/ReservationsModel';
import RoomsInventoryModel, { IRoomsInventory } from './model/RoomsInventoryModel';
import RoomsModel, { IRooms } from './model/RoomsModel';
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
  const newClient = {
    surname: 'Doe',
    name: 'John',
    email: 'john.doe@gmail.com',
    phoneNumber: '+446069794045',
    birthday: new Date('2000-02-02')
  }

  //Save new Client
  await new ClientsModel(newClient).save();

  //Find this client by surname and name
  const foundClient = await ClientsModel.findOne({ surname: 'Doe', name: 'John' });
  const foundClientJSONStr = JSON.stringify(foundClient)

  assert.equal('{' + foundClientJSONStr.substring(foundClientJSONStr.indexOf(',') + 1), JSON.stringify(newClient), 'Clients not equals');

  //Update client
  await ClientsModel.updateOne({ surname: 'Doe', name: 'John' }, { name: 'Lorem' });

  //Find updated client by surname and name
  const updatedClient = await ClientsModel.findOne({ surname: 'Doe', name: 'Lorem' });
  
  assert.equal(updatedClient?.name, 'Lorem', 'Expect that client name changed to Lorem, but got ' + updatedClient?.name);

  //Delete client
  await ClientsModel.deleteOne({ surname: 'Doe', name: 'Lorem' });

  const noClient = await ClientsModel.findOne({ surname: 'Doe', name: 'Lorem' });

  assert.equal(noClient, null, 'No client should be found')
}

main();
