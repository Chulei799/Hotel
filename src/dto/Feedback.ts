import mongoose from "mongoose";

class Feedback {
    private clientId: mongoose.Schema.Types.ObjectId;
    private roomId: mongoose.Schema.Types.ObjectId;
    private rating: number;
    private comment?: string;
    private date: Date;

    constructor(clientId: mongoose.Schema.Types.ObjectId, roomId: mongoose.Schema.Types.ObjectId, rating: number, date: Date, comment?: string) {
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

    public setClientId(clientId: mongoose.Schema.Types.ObjectId) {
        this.clientId = clientId;
    }

    public getRoomId() {
        return this.roomId;
    }

    public setRoomId(roomId: mongoose.Schema.Types.ObjectId) {
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
}

export default Feedback;