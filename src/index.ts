import mongoose from 'mongoose';
import 'dotenv/config'
import { Config } from './db_config';
import Clients from './dto/Clients';
import Employees from './dto/Employees';
import ClientsModel, { IClients } from './model/ClientsModel';
import ClientsServicesModel, { IClientsServices } from './model/ClientsServicesModel';
import EmployeesModel, { IEmployees } from './model/EmployeesModel';
import HotelServicesModel, { IHotelServices } from './model/HotelServicesModel';
import InventoryModel, { IInventory } from './model/InventoryModel';
import ReservationsModel, { IReservations, Status } from './model/ReservationsModel';
import RoomsInventoryModel, { IRoomsInventory } from './model/RoomsInventoryModel';
import RoomsModel, { IRooms, TypeOfAccomodation } from './model/RoomsModel';
import FeedbacksModel, {IFeedbacks} from './model/FeedbackModel';
import LostAndFoundModel, {ILostAndFound} from './model/LostAndFoundModel';
import ClientsServices from './dto/ClientsServices';
import Feedback from './dto/Feedback';
import Reservations from './dto/Reservations';
import Inventory from './dto/Inventory';
import RoomsInventory from './dto/RoomsInventory';
import LostAndFound from './dto/LostAndFound';

async function main() {
  try {
    await mongoose.connect(`mongodb+srv://${Config.DB_USER}:${Config.DB_PASSWORD}@hotelcluster.oyed08v.mongodb.net/?retryWrites=true&w=majority`, { dbName: 'hotel' });
    console.log('Connected to MongoDB');
    await printClientServices()
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

async function printClientServices() {
  await ClientsModel.find({});
  await HotelServicesModel.find({});
  const clientsServices = await ClientsServicesModel.find().populate<{clientId: IClients}>('clientId').populate<{serviceId: IHotelServices}>('serviceId').exec();

  for (const c of clientsServices) {
    console.log(`${c.clientId.surname + " " + c.clientId.name} ordered ${c.serviceId.name}`);
  }
}

main();
