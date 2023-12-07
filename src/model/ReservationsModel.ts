import mongoose from 'mongoose';

const reservationsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    reservationId: {
        type: Number,
        required: true
    },
    clientId: {
        type: Number,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    },
    checkInDate: {
        type: Date,
        alias: '$date',
        required: true
    },
    checkOutDate: {
        type: Date,
        alias: '$date',
        required: true
    }
}, {
    collection: 'reservations',
    versionKey: false
});

const ReservationsModel = mongoose.model('Reservations', reservationsSchema);

export default ReservationsModel;