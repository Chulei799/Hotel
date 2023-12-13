import mongoose, { Document, Schema } from 'mongoose';

export enum TypeOfAccomodation {
    Single = 'Single',
    Double = 'Double',
    Triple = 'Triple',
    Quadruple = 'Quadruple'
}

export enum TypeOfComfort {
    Standard = 'Standard',
    Superior = 'Superior',
    Deluxe = 'Deluxe',
    Family = 'Family',
    Suite = 'Suite',
    Presidential = 'Presidential'
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

const RoomsModel = mongoose.model<IRooms>('RoomsSchema', roomsSchema);

export default RoomsModel;