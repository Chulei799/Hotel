import RoomsModel, { IRooms } from "../model/RoomsModel";
import BaseDAO from "./BaseDAO";

class RoomsDAO extends BaseDAO<IRooms> {

    constructor() {
        super(RoomsModel);
    }
}

export default RoomsDAO;