import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
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

const InventoryModel = mongoose.model('Inventory', InventorySchema);

export default InventoryModel;