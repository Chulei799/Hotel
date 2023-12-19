import { IRooms, TypeOfAccomodation, TypeOfComfort } from "../model/RoomsModel";

class Rooms {
    private number: number;
    private price: number;
    private typeOfAccommodation: TypeOfAccomodation;
    private typeOfComfort: TypeOfComfort;
    private bedsCount: number;
    private booked: boolean;

	

	constructor(number: number, price: number, typeOfAccommodation: TypeOfAccomodation, typeOfComfort: TypeOfComfort, bedsCount: number, booked: boolean) {
		this.number = number;
		this.price = price;
        this.typeOfAccommodation = typeOfAccommodation;
        this.typeOfComfort = typeOfComfort;
		this.bedsCount = bedsCount;
		this.booked = booked;
	}

	public getNumber(): number {
		return this.number;
	}

	public getPrice(): number {
		return this.price;
	}

    public getTypeOfAccommodation(): TypeOfAccomodation {
        return this.typeOfAccommodation;
    }

    public getTypeOfComfort(): TypeOfComfort {
        return this.typeOfComfort;
    }

	public getBedsCount(): number {
		return this.bedsCount;
	}

	public getBooked(): boolean {
		return this.booked;
	}

	public setNumber(value: number) {
		this.number = value;
	}

	public setPrice(value: number) {
		this.price = value;
	}

    public setTypeOfAccommodation(typeOfAccommodation: TypeOfAccomodation) {
        this.typeOfAccommodation = typeOfAccommodation;
    }

    public setTypeOfComfort(typeOfComfort: TypeOfComfort) {
        this.typeOfComfort = typeOfComfort; 
    }

	public setBedsCount(value: number) {
		this.bedsCount = value;
	}

	public setBooked(value: boolean) {
		this.booked = value;
	}

	public toIRooms(): IRooms {
        const room: IRooms = <IRooms> {
            number: this.number,
			price: this.price,
        	typeOfAccommodation: this.typeOfAccommodation,
        	typeOfComfort: this.typeOfComfort,
			bedsCount: this.bedsCount,
			booked: this.booked
        };
        return room;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

export default Rooms;