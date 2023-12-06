"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const roomsSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        auto: true,
        alias: '$oid'
    },
    number: {
        type: Number,
        required: true
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
const RoomsModel = mongoose_1.default.model('RoomsSchema', roomsSchema);
exports.default = RoomsModel;
