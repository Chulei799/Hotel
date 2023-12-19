import mongoose from "mongoose";
import { expect } from "chai";
import "mocha";

import Employees from "../dto/Employees";
import { Config } from "../db_config";
import EmployeesDAO from "../dao/EmployeesDAO";

describe("Test Employees Collection", function () {
    this.beforeAll(async () => {
        try {
            await mongoose.connect(`mongodb+srv://${Config.DB_USER}:${Config.DB_PASSWORD}@hotelcluster.oyed08v.mongodb.net/?retryWrites=true&w=majority`, { dbName: "hotel" });
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    });

    this.afterAll(async () => {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    });

    it("Create, read, update and delete Employee", async function () {
        const employeesDAO = new EmployeesDAO();
        const searchParameters = {
            surname: "Doe",
            name: "John",
            email: "john.doe@gmail.com",
            phoneNumber: "+446069794045",
            position: "Administrator",
            birthday: new Date("2000-02-02"),
            salary: 1000
        };
        const updatedSearchParameters = {
            surname: "Doe",
            name: "Lorem",
            email: "john.doe@gmail.com",
            phoneNumber: "+446069794045",
            position: "Administrator",
            birthday: new Date("2000-02-02"),
            salary: 1000
        };

        // Clear same documents if exist
        await employeesDAO.deleteMany(searchParameters);
        await employeesDAO.deleteMany(updatedSearchParameters);

        // Create new Employee
        const newEmployee = new Employees(
            searchParameters.surname,
            searchParameters.name,
            searchParameters.email,
            searchParameters.phoneNumber,
            searchParameters.position,
            searchParameters.birthday,
            searchParameters.salary
        );
        console.log("New Employee that should be added to database: " + newEmployee);
        await employeesDAO.insertMany(newEmployee.toIEmployees());

        // Read new Employee
        const foundEmployee = await employeesDAO.findOne(searchParameters);
        const foundEmployeeJSONStr = JSON.stringify(foundEmployee);
        console.log("Found employee in database: " + foundEmployee);
        expect(JSON.stringify(newEmployee), "Employees not equals").equal("{" + foundEmployeeJSONStr.substring(foundEmployeeJSONStr.indexOf(",") + 1));

        // Update new Employee
        await employeesDAO.updateOne(searchParameters, { name: updatedSearchParameters.name });
        const updatedEmployee = await employeesDAO.findOne(updatedSearchParameters);
        console.log("Updated employee: " + updatedEmployee);
        expect(updatedEmployee?.name, `Expect that employee name changed to ${updatedSearchParameters.name}, but got ${updatedEmployee?.name}`).equal(updatedSearchParameters.name);

        //Delete new Employee
        await employeesDAO.deleteOne(updatedSearchParameters);
        const noEmployee = await employeesDAO.findOne(updatedSearchParameters);
        expect(noEmployee, "No employee should be found").equal(null);

        // Clear after test
        await employeesDAO.deleteMany(searchParameters);
        await employeesDAO.deleteMany(updatedSearchParameters);
    }).timeout(10000);
});
