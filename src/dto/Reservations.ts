import mongoose from "mongoose";
import { IReservations, Status } from "../model/ReservationsModel";

class Reservations {
    private clientId: mongoose.Types.ObjectId;
    private roomId: mongoose.Types.ObjectId;
    private checkInDate: Date;
    private checkOutDate: Date;
    private status: Status;

	constructor(clientId: mongoose.Types.ObjectId, roomId: mongoose.Types.ObjectId, checkInDate: Date, checkOutDate: Date, status: Status) {
		this.clientId = clientId;
		this.roomId = roomId;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
        this.status = status;
	}
    

    public getClientId(): mongoose.Types.ObjectId {
		return this.clientId;
	}

    public getRoomId(): mongoose.Types.ObjectId {
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

    public setClientId(value: mongoose.Types.ObjectId) {
		this.clientId = value;
	}

    public setRoomId(value: mongoose.Types.ObjectId) {
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

	public toIReservations(): IReservations {
        const reservation: IReservations = <IReservations> {
            clientId: this.clientId,
			roomId: this.roomId,
			checkInDate: this.checkInDate,
			checkOutDate: this.checkOutDate,
        	status: this.status
        };
        return reservation;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

export default Reservations;