import mongoose, {
	Model,
	FilterQuery,
	QueryOptions,
	UpdateQuery,
	ClientSession,
	InsertManyOptions,
	SaveOptions,
	CreateOptions,
	PipelineStage,
	AggregateOptions,
	Document
} from 'mongoose';

class BaseDAO<T extends Document> {
    private model: Model<T>;
 
	constructor(model: Model<T>) {
		this.model = model;
	}
 
	public save(document: T, options?: SaveOptions) {
		return document.save(options);
	}
 
	public saveMany(documents: T[], options?: CreateOptions) {
		return this.model.create(documents, options);
	}
 
	public insertMany(documents: T | T[], options: InsertManyOptions = {}) {
		return this.model.insertMany(documents, options);
	}
 
	public findOne(filter?: FilterQuery<T>, options?: QueryOptions<T>) {
		return this.model.findOne(filter, null, options);
	}
 
	public find(filter: FilterQuery<T>, options?: QueryOptions<T>) {
		return this.model.find(filter, null, options);
	}
 
	public updateOne(filter?: FilterQuery<T>, update?: UpdateQuery<T>, options?: QueryOptions<T>) {
		return this.model.updateOne(filter, update, options);
	}
 
	public updateMany(filter?: FilterQuery<T>, update?: UpdateQuery<T>, options?: QueryOptions<T>) {
		return this.model.updateMany(filter, update, options);
	}
 
	public updateAndFind(filter?: FilterQuery<T>, update?: UpdateQuery<T>, options?: QueryOptions<T>) {
		return this.model.findOneAndUpdate(filter, update, options);
	}
 
	public deleteOne(filter?: FilterQuery<T>, options?: QueryOptions<T>) {
		return this.model.deleteOne(filter, options);
	}
 
	public deleteAndFind(filter?: FilterQuery<T>, options?: QueryOptions<T>) {
		return this.model.findOneAndDelete(filter, options);
	}
 
	public deleteMany(filter?: FilterQuery<T>, options?: QueryOptions<T>) {
		return this.model.deleteMany(filter, options);
	}
 
	public count(filter?: FilterQuery<T>, options?: QueryOptions<T>) {
		return this.model.countDocuments(filter, options);
	}
 
	public countAll(options?: QueryOptions<T>) {
		return this.model.estimatedDocumentCount(options);
	}
 
	public aggregate(pipeline?: PipelineStage[], options?: AggregateOptions) {
		return this.model.aggregate(pipeline, options);
	}
 
	public startSession(): Promise<ClientSession> {
		return mongoose.startSession();
	}
}

export default BaseDAO;