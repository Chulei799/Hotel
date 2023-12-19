import ReservationsModel, { IReservations } from "../model/ReservationsModel";
import BaseDAO from "./BaseDAO";

class ReservationsDAO extends BaseDAO<IReservations> {

    constructor() {
        super(ReservationsModel);
    }
}

export default ReservationsDAO;