import mongoose, { Document, Schema } from 'mongoose';

export interface IHotelServices extends Document {
    name: string;
    price: number;
}

const HotelServicesSchema = new Schema<IHotelServices>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    collection: 'hotelServices',
    versionKey: false
});

const HotelServicesModel = mongoose.model<IHotelServices>('HotelServices', HotelServicesSchema);

export default HotelServicesModel;