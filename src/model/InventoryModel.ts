import mongoose, { Document, Schema } from 'mongoose';

export interface IInventory extends Document {
    name: string;
    totalCount: number;
    availableCount: number;
}

const InventorySchema = new Schema<IInventory>({
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

const InventoryModel = mongoose.model<IInventory>('Inventory', InventorySchema);

export default InventoryModel;