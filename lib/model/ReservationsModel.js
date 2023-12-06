"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reservationsSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        auto: true,
        alias: '$oid'
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
const ReservationsModel = mongoose_1.default.model('Reservations', reservationsSchema);
exports.default = ReservationsModel;
