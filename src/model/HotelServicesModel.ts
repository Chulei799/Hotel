import mongoose from 'mongoose';

const HotelServicesSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    hotelServiceId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    collection: 'hotelServices',
    versionKey: false
});

const HotelServicesModel = mongoose.model('HotelServices', HotelServicesSchema);

export default HotelServicesModel;