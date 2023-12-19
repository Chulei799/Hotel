import FeedbacksModel, { IFeedbacks } from "../model/FeedbackModel";
import BaseDAO from "./BaseDAO";

class FeedbackDAO extends BaseDAO<IFeedbacks> {

    constructor() {
        super(FeedbacksModel);
    }
}

export default FeedbackDAO;