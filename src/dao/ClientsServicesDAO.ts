import { FilterQuery, QueryOptions, Query, Document, Types } from "mongoose";
import ClientsServicesModel, { IClientsServices } from "../model/ClientsServicesModel";
import BaseDAO from "./BaseDAO";
import ClientsModel, { IClients } from "../model/ClientsModel";
import HotelServicesModel, { IHotelServices } from "../model/HotelServicesModel";

class ClientsServicesDAO extends BaseDAO<IClientsServices> {

    constructor() {
        super(ClientsServicesModel);
    }

    public async findOneAndPopulate(filter?: FilterQuery<IClientsServices> | undefined, options?: QueryOptions<IClientsServices> | undefined, populateClients: boolean = false, populateHotelServices: boolean = false) {
        if (populateClients && !populateHotelServices) {
            return super.findOne(filter, options).populate<{ clientId: IClients }>({ path: 'clientId', model: ClientsModel });
        } else if (!populateClients && populateHotelServices) {
            return super.findOne(filter, options).populate<{ serviceId: IHotelServices }>( { path: 'serviceId', model: HotelServicesModel });
        } else if (populateClients && populateHotelServices) {
            return super.findOne(filter, options).populate<{ clientId: IClients }>({ path: 'clientId', model: ClientsModel }).populate<{ serviceId: IHotelServices }>( { path: 'serviceId', model: HotelServicesModel });
        } else {
            return super.findOne();
        }
    }
}

export default ClientsServicesDAO;