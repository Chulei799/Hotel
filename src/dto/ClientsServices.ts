import mongoose from 'mongoose';

class ClientsServices {
    private clientId: mongoose.Schema.Types.ObjectId;
    private serviceId: mongoose.Schema.Types.ObjectId;
    private date: Date;

    constructor(clientId: mongoose.Schema.Types.ObjectId, serviceId: mongoose.Schema.Types.ObjectId, date: Date) {
        this.clientId = clientId;
        this.serviceId = serviceId;
        this.date = date;
    }

    public getClientId() {
        return this.clientId;
    }

    public setClientId(clientId: mongoose.Schema.Types.ObjectId) {
        this.clientId = clientId;
    }

    public getServiceId() {
        return this.serviceId;
    }

    public setServiceId(serviceId: mongoose.Schema.Types.ObjectId) {
        this.serviceId = serviceId;
    }

    public getDate() {
        return this.date;
    }

    public setDate(date: Date) {
        this.date = date;
    }
}

export default ClientsServices;