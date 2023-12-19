import ClientsModel, { IClients } from "../model/ClientsModel";
import BaseDAO from "./BaseDAO";

class ClientsDAO extends BaseDAO<IClients> {

    constructor() {
        super(ClientsModel);
    }
}

export default ClientsDAO;