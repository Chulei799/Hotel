import mongoose, { Document, Schema } from 'mongoose';

export interface IRoomsInventory extends Document {
    inventoryId: mongoose.Schema.Types.ObjectId;
    roomId: mongoose.Schema.Types.ObjectId;
    count: number;
    condition: string;
    note: string;
}

const roomsInventorySchema = new Schema<IRoomsInventory>({
    inventoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory',
        required: true
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rooms',
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

const RoomsInventoryModel = mongoose.model<IRoomsInventory>('RoomsInventorySchema', roomsInventorySchema);

export default RoomsInventoryModel;