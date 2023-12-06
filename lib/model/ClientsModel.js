"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const clientsSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        auto: true,
        alias: '$oid'
    },
    clientId: {
        type: Number,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        alias: '$date',
        required: true
    }
}, {
    collection: 'clients',
    versionKey: false
});
const ClientsModel = mongoose_1.default.model('Clients', clientsSchema);
exports.default = ClientsModel;
