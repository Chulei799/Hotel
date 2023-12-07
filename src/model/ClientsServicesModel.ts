import mongoose from 'mongoose';

const clientsServicesSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
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

const ClientsServicesModel = mongoose.model('ClientsServices', clientsServicesSchema);

export default ClientsServicesModel;