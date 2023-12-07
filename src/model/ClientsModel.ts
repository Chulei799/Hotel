import mongoose, { Document, Schema } from 'mongoose';

export interface IClients extends Document {
    surname: string;
    name: string;
    email: string;
    phoneNumber: string;
    birthday: Date;
}

const clientsSchema = new Schema<IClients>({
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        alias: '$date',
        required: true
    }
}, {
    collection: 'clients',
    versionKey: false
});

const ClientsModel = mongoose.model<IClients>('Clients', clientsSchema);

export default ClientsModel;