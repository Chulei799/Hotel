import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployees extends Document {
    surname: string;
    name: string;
    email: string;
    phoneNumber: string;
    position: string;
    birthday: Date;
    salary: number;
}

const employeesSchema = new Schema<IEmployees>({
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        alias: '$date',
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
}, {
    collection: 'employees',
    versionKey: false
});

const EmployeesModel = mongoose.model<IEmployees>('employees', employeesSchema);

export default EmployeesModel;