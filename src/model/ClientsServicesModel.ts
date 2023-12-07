import mongoose from 'mongoose';

const clientsServicesSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    clientsServicesId: {
        type: Number,
        required: true,
        unique: true
    },
    clientId: {
        type: Number,
        required: true
    },
    serviceId: {
        type: Number,
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