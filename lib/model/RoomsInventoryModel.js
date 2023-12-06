"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const roomsInventorySchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        auto: true,
        alias: '$oid'
    },
    roomInventoryId: {
        type: Number,
        required: true
    },
    inventoryId: {
        type: Number,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
}, {
    collection: 'roomsInventory',
    versionKey: false
});
const RoomsInventoryModel = mongoose_1.default.model('RoomsInventorySchema', roomsInventorySchema);
exports.default = RoomsInventoryModel;
