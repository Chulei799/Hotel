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

async function main() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hotelcluster.oyed08v.mongodb.net/?retryWrites=true&w=majority`, { dbName: 'hotel' });
    
    //Find all Clients
    console.log('\n|----------| Clients |----------|');
    console.log(await ClientsModel.find());
    console.log('\n|-------------------------------|');

    //Find all Clients Services
    console.log('\n|-----| Clients  Services |-----|');
    console.log(await ClientsServicesModel.find());
    console.log('\n|-------------------------------|');

    //Find all Employees
    console.log('\n|---------| Employees |---------|');
    console.log(await EmployeesModel.find());
    console.log('\n|-------------------------------|');

    //Find all Hotel Service
    console.log('\n|-------| Hotel Service |-------|');
    console.log(await HotelServicesModel.find());
    console.log('\n|-------------------------------|');

    //Find all Inventory
    console.log('\n|---------| Inventory |---------|');
    console.log(await InventoryModel.find());
    console.log('\n|-------------------------------|');

    //Find all Reservations
    console.log('\n|-------| Reservations  |-------|');
    console.log(await ReservationsModel.find());
    console.log('\n|-------------------------------|');

    //Find all Rooms Inventory
    console.log('\n|------| Rooms Inventory |------|');
    console.log(await RoomsInventoryModel.find());
    console.log('\n|-------------------------------|');

    //Find all Rooms
    console.log('\n|-----------| Rooms |-----------|');
    console.log(await RoomsModel.find());
    console.log('\n|-------------------------------|');

  } finally {
    await mongoose.disconnect();
  }
}

main().catch(console.error);
