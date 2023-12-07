import mongoose from 'mongoose';

const roomsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
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
        type: Number,
        required: true
    },
    typeOfComfort: {
        type: Number,
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

const RoomsModel = mongoose.model('RoomsSchema', roomsSchema);

export default RoomsModel;