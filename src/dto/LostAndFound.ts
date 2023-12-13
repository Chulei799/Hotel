import mongoose from "mongoose";

class LostAndFound {
    private roomId: mongoose.Schema.Types.ObjectId;
    private item: string;
    private description: string;
    private dateFound: Date;

	constructor(roomId: mongoose.Schema.Types.ObjectId, item: string, description: string, dateFound: Date) {
		this.roomId = roomId;
		this.item = item;
		this.description = description;
		this.dateFound = dateFound;
	}

    public getRoomId(): mongoose.Schema.Types.ObjectId {
		return this.roomId;
	}

    public getItem(): string {
		return this.item;
	}

    public getDescription(): string {
		return this.description;
	}

    public getDateFound(): Date {
		return this.dateFound;
	}

    public setRoomId(value: mongoose.Schema.Types.ObjectId) {
		this.roomId = value;
	}

    public setItem(value: string) {
		this.item = value;
	}

    public setDescription(value: string) {
		this.description = value;
	}

    public setDateFound(value: Date) {
		this.dateFound = value;
	}
}

export default LostAndFound;