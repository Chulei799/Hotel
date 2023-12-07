import mongoose, { Document, Schema } from 'mongoose';

export interface IReservations extends Document {
    clientId: mongoose.Schema.Types.ObjectId;
    roomId: mongoose.Schema.Types.ObjectId;
    checkInDate: Date;
    checkOutDate: Date;
}

const reservationsSchema = new Schema<IReservations>({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clients',
        required: true
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rooms',
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

const ReservationsModel = mongoose.model<IReservations>('Reservations', reservationsSchema);

export default ReservationsModel;