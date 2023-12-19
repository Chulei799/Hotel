import EmployeesModel, { IEmployees } from "../model/EmployeesModel";
import BaseDAO from "./BaseDAO";

class EmployeesDAO extends BaseDAO<IEmployees> {

    constructor() {
        super(EmployeesModel);
    }
}

export default EmployeesDAO;