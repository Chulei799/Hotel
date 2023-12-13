import mongoose from "mongoose";
import { Status } from "../model/ReservationsModel";

class Reservations {
    private clientId: mongoose.Schema.Types.ObjectId;
    private roomId: mongoose.Schema.Types.ObjectId;
    private checkInDate: Date;
    private checkOutDate: Date;
    private status: Status;

	constructor(clientId: mongoose.Schema.Types.ObjectId, roomId: mongoose.Schema.Types.ObjectId, checkInDate: Date, checkOutDate: Date, status: Status) {
		this.clientId = clientId;
		this.roomId = roomId;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
        this.status = status;
	}
    

    public getClientId(): mongoose.Schema.Types.ObjectId {
		return this.clientId;
	}

    public getRoomId(): mongoose.Schema.Types.ObjectId {
		return this.roomId;
	}

    public getCheckInDate(): Date {
		return this.checkInDate;
	}

    public getCheckOutDate(): Date {
		return this.checkOutDate;
	}

    public getStatus(): Status {
        return this.status;
    }

    public setClientId(value: mongoose.Schema.Types.ObjectId) {
		this.clientId = value;
	}

    public setRoomId(value: mongoose.Schema.Types.ObjectId) {
		this.roomId = value;
	}

    public setCheckInDate(value: Date) {
		this.checkInDate = value;
	}

    public setCheckOutDate(value: Date) {
		this.checkOutDate = value;
	}

    public setStatus(status: Status) {
        this.status = status;
    }
}

export default Reservations;