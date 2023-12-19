import { IClients } from "../model/ClientsModel";

class Clients {
    private surname: string;
    private name: string;
    private email: string;
    private phoneNumber: string;
    private birthday: Date;

    constructor(surname: string, name: string, email: string, phoneNumber: string, birthday: Date) {
        this.surname = surname;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.birthday = birthday;
    }

    public getSurname() {
        return this.surname;
    }

    public setSurname(surname: string) {
        this.surname = surname;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getEmail() {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getPhoneNumber() {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }

    public getBirthday() {
        return this.birthday;
    }

    public setBirthday(birthday: Date) {
        this.birthday = birthday;
    }

    public toIClients(): IClients {
        const client: IClients = <IClients> {
            surname: this.surname,
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            birthday: this.birthday
        };
        return client;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

export default Clients;