import RoomsInventoryModel, { IRoomsInventory } from "../model/RoomsInventoryModel";
import BaseDAO from "./BaseDAO";

class RoomsInventoryDAO extends BaseDAO<IRoomsInventory> {

    constructor() {
        super(RoomsInventoryModel);
    }
}

export default RoomsInventoryDAO;