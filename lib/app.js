"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const ClientsModel_1 = __importDefault(require("./model/ClientsModel"));
const ClientsServicesModel_1 = __importDefault(require("./model/ClientsServicesModel"));
const EmployeesModel_1 = __importDefault(require("./model/EmployeesModel"));
const HotelServicesModel_1 = __importDefault(require("./model/HotelServicesModel"));
const InventoryModel_1 = __importDefault(require("./model/InventoryModel"));
const ReservationsModel_1 = __importDefault(require("./model/ReservationsModel"));
const RoomsInventoryModel_1 = __importDefault(require("./model/RoomsInventoryModel"));
const RoomsModel_1 = __importDefault(require("./model/RoomsModel"));
async function main() {
    try {
        await mongoose_1.default.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hotelcluster.oyed08v.mongodb.net/?retryWrites=true&w=majority`, { dbName: 'hotel' });
        //Find all Clients
        console.log('\n|----------| Clients |----------|');
        console.log(await ClientsModel_1.default.find());
        console.log('\n|-------------------------------|');
        //Find all Clients Services
        console.log('\n|-----| Clients  Services |-----|');
        console.log(await ClientsServicesModel_1.default.find());
        console.log('\n|-------------------------------|');
        //Find all Employees
        console.log('\n|---------| Employees |---------|');
        console.log(await EmployeesModel_1.default.find());
        console.log('\n|-------------------------------|');
        //Find all Hotel Service
        console.log('\n|-------| Hotel Service |-------|');
        console.log(await HotelServicesModel_1.default.find());
        console.log('\n|-------------------------------|');
        //Find all Inventory
        console.log('\n|---------| Inventory |---------|');
        console.log(await InventoryModel_1.default.find());
        console.log('\n|-------------------------------|');
        //Find all Reservations
        console.log('\n|-------| Reservations  |-------|');
        console.log(await ReservationsModel_1.default.find());
        console.log('\n|-------------------------------|');
        //Find all Rooms Inventory
        console.log('\n|------| Rooms Inventory |------|');
        console.log(await RoomsInventoryModel_1.default.find());
        console.log('\n|-------------------------------|');
        //Find all Rooms
        console.log('\n|-----------| Rooms |-----------|');
        console.log(await RoomsModel_1.default.find());
        console.log('\n|-------------------------------|');
    }
    finally {
        await mongoose_1.default.disconnect();
    }
}
main().catch(console.error);
