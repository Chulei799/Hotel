import mongoose from 'mongoose';

const employeesSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
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

const EmployeesModel = mongoose.model('employees', employeesSchema);

export default EmployeesModel;