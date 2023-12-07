import mongoose from 'mongoose';

const roomsInventorySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    roomInventoryId: {
        type: Number,
        required: true,
        unique: true
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

const RoomsInventoryModel = mongoose.model('RoomsInventorySchema', roomsInventorySchema);

export default RoomsInventoryModel;