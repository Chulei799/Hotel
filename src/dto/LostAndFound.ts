import mongoose from "mongoose";
import { ILostAndFound } from "../model/LostAndFoundModel";

class LostAndFound {
    private roomId: mongoose.Types.ObjectId;
    private item: string;
    private description: string;
    private dateFound: Date;

	constructor(roomId: mongoose.Types.ObjectId, item: string, description: string, dateFound: Date) {
		this.roomId = roomId;
		this.item = item;
		this.description = description;
		this.dateFound = dateFound;
	}

    public getRoomId(): mongoose.Types.ObjectId {
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

    public setRoomId(value: mongoose.Types.ObjectId) {
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

	public toILostAndFound(): ILostAndFound {
        const lostAndFound: ILostAndFound = <ILostAndFound> {
            roomId: this.roomId,
			item: this.item,
			description: this.description,
			dateFound: this.dateFound
        };
        return lostAndFound;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

export default LostAndFound;