import InventoryModel, { IInventory } from "../model/InventoryModel";
import BaseDAO from "./BaseDAO";

class InventoryDAO extends BaseDAO<IInventory> {

    constructor() {
        super(InventoryModel);
    }
}

export default InventoryDAO;