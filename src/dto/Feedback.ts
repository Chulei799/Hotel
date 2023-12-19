import mongoose from "mongoose";
import { IFeedbacks } from "../model/FeedbackModel";

class Feedback {
    private clientId: mongoose.Types.ObjectId;
    private roomId: mongoose.Types.ObjectId;
    private rating: number;
    private comment?: string;
    private date: Date;

    constructor(clientId: mongoose.Types.ObjectId, roomId: mongoose.Types.ObjectId, rating: number, date: Date, comment?: string) {
        this.clientId = clientId;
        this.roomId = roomId;
        this.rating = rating;
        if (comment !== undefined) {
            this.comment = comment;
        }
        this.date = date;
    }

    public getClientId() {
        return this.clientId;
    }

    public setClientId(clientId: mongoose.Types.ObjectId) {
        this.clientId = clientId;
    }

    public getRoomId() {
        return this.roomId;
    }

    public setRoomId(roomId: mongoose.Types.ObjectId) {
        this.roomId = roomId;
    }

    public getRating() {
        return this.rating;
    }

    public setRating(rating: number) {
        this.rating = rating;
    }

    public getComment() {
        return this.comment;
    }

    public setComment(comment: string) {
        this.comment = comment;
    }

    public getDate() {
        return this.date;
    }

    public setDate(date: Date) {
        this.date = date;
    }

    public toIFeedbacks(): IFeedbacks {
        const feedback: IFeedbacks = <IFeedbacks> {
            clientId: this.clientId,
            roomId: this.roomId,
            rating: this.rating,
            comment: this.comment,
            date: this.date
        };
        return feedback;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

export default Feedback;