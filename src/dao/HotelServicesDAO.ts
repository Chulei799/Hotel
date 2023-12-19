import HotelServicesModel, { IHotelServices } from "../model/HotelServicesModel";
import BaseDAO from "./BaseDAO";

class HotelServicesDAO extends BaseDAO<IHotelServices> {

    constructor() {
        super(HotelServicesModel);
    }
}

export default HotelServicesDAO;