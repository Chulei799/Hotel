import mongoose, { Document, Schema } from 'mongoose';

export interface IClientsServices extends Document {
    clientId: mongoose.Types.ObjectId;
    serviceId: mongoose.Types.ObjectId;
    date: Date;
}

const clientsServicesSchema = new Schema<IClientsServices>({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clients',
        required: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HotelServices',
        required: true
    },
    date: {
        type: Date,
        alias: '$date',
        required: true
    }
}, {
    collection: 'clientsServices',
    versionKey: false
});

const ClientsServicesModel = mongoose.model<IClientsServices>('ClientsServices', clientsServicesSchema);

export default ClientsServicesModel;