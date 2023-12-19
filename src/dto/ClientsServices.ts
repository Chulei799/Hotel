import mongoose from 'mongoose';
import { IClientsServices } from '../model/ClientsServicesModel';

class ClientsServices {
    private clientId: mongoose.Types.ObjectId;
    private serviceId: mongoose.Types.ObjectId;
    private date: Date;

    constructor(clientId: mongoose.Types.ObjectId, serviceId: mongoose.Types.ObjectId, date: Date) {
        this.clientId = clientId;
        this.serviceId = serviceId;
        this.date = date;
    }

    public getClientId() {
        return this.clientId;
    }

    public setClientId(clientId: mongoose.Types.ObjectId) {
        this.clientId = clientId;
    }

    public getServiceId() {
        return this.serviceId;
    }

    public setServiceId(serviceId: mongoose.Types.ObjectId) {
        this.serviceId = serviceId;
    }

    public getDate() {
        return this.date;
    }

    public setDate(date: Date) {
        this.date = date;
    }

    public toIClientsServices(): IClientsServices {
        const clientsServices: IClientsServices = <IClientsServices> {
            clientId: this.clientId,
            serviceId: this.serviceId,
            date: this.date
        };
        return clientsServices;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

export default ClientsServices;