import mongoose from 'mongoose';

const roomsInventorySchema = new mongoose.Schema({
    inventoryId: {
        type: mongoose.Schema.Types.ObjectId,
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