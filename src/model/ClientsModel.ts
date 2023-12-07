import mongoose from 'mongoose';

const clientsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    clientId: {
        type: Number,
        required: true
    },
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

const ClientsModel = mongoose.model('Clients', clientsSchema);

export default ClientsModel;