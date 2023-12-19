import { IEmployees } from "../model/EmployeesModel";

class Employees {
    private surname: string;
    private name: string;
    private email: string;
    private phoneNumber: string;
    private position: string;
    private birthday: Date;
    private salary: number;

    constructor(surname: string, name: string, email: string, phoneNumber: string, position: string, birthday: Date, salary: number) {
        this.surname = surname;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.birthday = birthday;
        this.salary = salary;
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

    public getPosition() {
        return this.position;
    }

    public setPosition(position: string) {
        this.position = position;
    }

    public getBirthday() {
        return this.birthday;
    }

    public setBirthday(birthday: Date) {
        this.birthday = birthday;
    }

    public getSalary() {
        return this.salary;
    }

    public setSalary(salary: number) {
        this.salary = salary;
    }

    public toIEmployees(): IEmployees {
        const employee: IEmployees = <IEmployees> {
            surname: this.surname,
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber,
            position: this.position,
            birthday: this.birthday,
            salary: this.salary
        };
        return employee;
    }

    public toString() {
        return JSON.stringify(this);
    }
}

export default Employees;