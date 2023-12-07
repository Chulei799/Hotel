import mongoose, { Document, Schema } from 'mongoose';

export interface IRooms extends Document {
    number: number;
    price: number;
    typeOfAccommodation: ['Single', 'Double', 'Triple', 'Quadruple']
    typeOfComfort: ['Standard', 'Superior', 'Deluxe', 'Family', 'Suite', 'Presidential'];
    bedsCount: number;
    booked: boolean;
}

const roomsSchema = new Schema<IRooms>({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    typeOfAccommodation: {
        enum: ['Single', 'Double', 'Triple', 'Quadruple'],
        required: true
    },
    typeOfComfort: {
        enum: ['Standard', 'Superior', 'Deluxe', 'Family', 'Suite', 'Presidential'],
        required: true
    },
    bedsCount: {
        type: Number,
        required: true
    },
    booked: {
        type: Boolean,
        required: true
    }
}, {
    collection: 'rooms',
    versionKey: false
});

const RoomsModel = mongoose.model<IRooms>('RoomsSchema', roomsSchema);

export default RoomsModel;