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
}

export default HotelServices;