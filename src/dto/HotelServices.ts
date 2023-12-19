import { IHotelServices } from "../model/HotelServicesModel";

class HotelServices {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getPrice() {
        return this.price;
    }

    public setPrice(price: number) {
        this.price = price;
    }

    public toIHotelServices(): IHotelServices {
        const hotelService: IHotelServices = <IHotelServices> {
            name: this.name,
            price: this.price
        };
        return hotelService;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

export default HotelServices;