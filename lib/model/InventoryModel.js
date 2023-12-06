"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const InventorySchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        auto: true,
        alias: '$oid'
    },
    inventoryId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    totalCount: {
        type: Number,
        required: true
    },
    availableCount: {
        type: Number,
        required: true
    }
}, {
    collection: 'inventory',
    versionKey: false
});
const InventoryModel = mongoose_1.default.model('Inventory', InventorySchema);
exports.default = InventoryModel;
