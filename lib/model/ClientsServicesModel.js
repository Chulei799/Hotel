"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const clientsServicesSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        auto: true,
        alias: '$oid'
    },
    clientsServicesId: {
        type: Number,
        required: true
    },
    clientId: {
        type: Number,
        required: true
    },
    serviceId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        alias: '$date',
        required: true
    }
}, {
    collection: 'clientsServices',
    versionKey: false
});
const ClientsServicesModel = mongoose_1.default.model('ClientsServices', clientsServicesSchema);
exports.default = ClientsServicesModel;
