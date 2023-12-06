"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const HotelServicesSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        auto: true,
        alias: '$oid'
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
const HotelServicesModel = mongoose_1.default.model('HotelServices', HotelServicesSchema);
exports.default = HotelServicesModel;
