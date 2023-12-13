import mongoose from "mongoose";

class RoomsInventory {
    private inventoryId: mongoose.Schema.Types.ObjectId;
    private roomId: mongoose.Schema.Types.ObjectId;
    private count: number;
    private condition: string;
    private note: string;

	constructor(inventoryId: mongoose.Schema.Types.ObjectId, roomId: mongoose.Schema.Types.ObjectId, count: number, condition: string, note: string) {
		this.inventoryId = inventoryId;
		this.roomId = roomId;
		this.count = count;
		this.condition = condition;
		this.note = note;
	}

    public getInventoryId(): mongoose.Schema.Types.ObjectId {
		return this.inventoryId;
	}

    public getRoomId(): mongoose.Schema.Types.ObjectId {
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

    public setInventoryId(value: mongoose.Schema.Types.ObjectId) {
		this.inventoryId = value;
	}

    public setRoomId(value: mongoose.Schema.Types.ObjectId) {
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

}

export default RoomsInventory;