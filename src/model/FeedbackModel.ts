import mongoose, { Document, Schema } from 'mongoose';

export interface IFeedbacks extends Document {
    clientId: mongoose.Types.ObjectId;
    roomId: mongoose.Types.ObjectId;
    rating: number;
    comment: string;
    date: Date;
}

const feedbacksSchema = new Schema<IFeedbacks>({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clients',
        required: true
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rooms',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        alias: '$date',
        required: true
    }
}, {
    collection: 'feedbacks',
    versionKey: false
});

const FeedbacksModel = mongoose.model<IFeedbacks>('Feedbacks', feedbacksSchema);

export default FeedbacksModel;