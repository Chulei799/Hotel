import mongoose, { Document, Schema } from 'mongoose';

export enum TypeOfAccomodation {
    SINGLE = 'Single',
    DOUBLE = 'Double',
    TRIPLE = 'Triple',
    QUADRUPLE = 'Quadruple'
}

export enum TypeOfComfort {
    STANDARD = 'Standard',
    SUPERIOR = 'Superior',
    DELUXE = 'Deluxe',
    FAMILY = 'Family',
    SUITE = 'Suite',
    PRESIDENTIAL = 'Presidential'
}

export interface IRooms extends Document {
    number: number;
    price: number;
    typeOfAccommodation: TypeOfAccomodation;
    typeOfComfort: TypeOfComfort;
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
        type: String,
        enum: Object.values(TypeOfAccomodation),
        required: true
    },
    typeOfComfort: {
        type: String,
        enum: Object.values(TypeOfComfort),
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

const RoomsModel = mongoose.model<IRooms>('Rooms', roomsSchema);

export default RoomsModel;