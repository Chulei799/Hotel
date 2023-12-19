import mongoose from "mongoose";
import "dotenv/config";
import { Config } from "./db_config";
import ClientsModel, { IClients } from "./model/ClientsModel";
import ClientsServicesModel from "./model/ClientsServicesModel";
import HotelServicesModel, { IHotelServices } from "./model/HotelServicesModel";
import ReservationsModel from "./model/ReservationsModel";
import RoomsModel, { IRooms } from "./model/RoomsModel";

async function main() {
    try {
        await mongoose.connect(
            `mongodb+srv://${Config.DB_USER}:${Config.DB_PASSWORD}@hotelcluster.oyed08v.mongodb.net/?retryWrites=true&w=majority`,
            { dbName: "hotel" },
        );
        console.log("Connected to MongoDB");
        await printClientServices();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

async function printClientServices() {
    console.log("Reservations:");
    const reservations = await ReservationsModel.find({})
        .populate<{ clientId: IClients }>({
            path: "clientId",
            model: ClientsModel,
        })
        .populate<{ roomId: IRooms }>({ path: "roomId", model: RoomsModel });

    for (const r of reservations) {
        console.log(
            `${r.clientId.surname + " " + r.clientId.name} reserved room ${
                r.roomId.number
            } from ${r.checkInDate.toDateString()} to ${r.checkOutDate.toDateString()}`,
        );
    }

    console.log("\n\nOrdered services:");
    const clientsServices = await ClientsServicesModel.find({})
        .populate<{ clientId: IClients }>({
            path: "clientId",
            model: ClientsModel,
        })
        .populate<{ serviceId: IHotelServices }>({
            path: "serviceId",
            model: HotelServicesModel,
        })
        .exec();

    for (const c of clientsServices) {
        console.log(
            `${c.clientId.surname + " " + c.clientId.name} ordered ${
                c.serviceId.name
            }`,
        );
    }
}

main();
