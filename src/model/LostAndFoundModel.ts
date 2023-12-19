import mongoose, { Document, Schema } from 'mongoose';

export interface ILostAndFound extends Document {
    roomId: mongoose.Types.ObjectId;
    item: string;
    description: string;
    dateFound: Date;
}

const lostAndFoundSchema = new Schema<ILostAndFound>({
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rooms',
        required: true
    },
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    dateFound: {
        type: Date,
        alias: '$date',
        required: true
    }
}, {
    collection: 'lostAndFound',
    versionKey: false
});

const LostAndFoundModel = mongoose.model<ILostAndFound>('LostAndFound', lostAndFoundSchema);

export default LostAndFoundModel;