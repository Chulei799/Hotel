import LostAndFoundModel, { ILostAndFound } from "../model/LostAndFoundModel";
import BaseDAO from "./BaseDAO";

class LostAndFoundDAO extends BaseDAO<ILostAndFound> {

    constructor() {
        super(LostAndFoundModel);
    }
}

export default LostAndFoundDAO;