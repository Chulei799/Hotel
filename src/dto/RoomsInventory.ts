import mongoose from "mongoose";
import { IRoomsInventory } from "../model/RoomsInventoryModel";

class RoomsInventory {
    private inventoryId: mongoose.Types.ObjectId;
    private roomId: mongoose.Types.ObjectId;
    private count: number;
    private condition: string;
    private note: string;

	constructor(inventoryId: mongoose.Types.ObjectId, roomId: mongoose.Types.ObjectId, count: number, condition: string, note: string) {
		this.inventoryId = inventoryId;
		this.roomId = roomId;
		this.count = count;
		this.condition = condition;
		this.note = note;
	}

    public getInventoryId(): mongoose.Types.ObjectId {
		return this.inventoryId;
	}

    public getRoomId(): mongoose.Types.ObjectId {
		return this.roomId;
	}

    public getCount(): number {
		return this.count;
	}

    public getCondition(): string {
		return this.condition;
	}

    public getNote(): string {
		return this.note;
	}

    public setInventoryId(value: mongoose.Types.ObjectId) {
		this.inventoryId = value;
	}

    public setRoomId(value: mongoose.Types.ObjectId) {
		this.roomId = value;
	}

    public setCount(value: number) {
		this.count = value;
	}

    public setCondition(value: string) {
		this.condition = value;
	}
    
    public setNote(value: string) {
		this.note = value;
	}

	public toIRoomsInventory(): IRoomsInventory {
        const roomInventory: IRoomsInventory = <IRoomsInventory> {
            inventoryId: this.inventoryId,
			roomId: this.roomId,
			count: this.count,
			condition: this.condition,
			note: this.note
        };
        return roomInventory;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

export default RoomsInventory;