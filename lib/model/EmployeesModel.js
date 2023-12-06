"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const employeesSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        auto: true,
        alias: '$oid'
    },
    employeeId: {
        type: Number,
        required: true
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
const EmployeesModel = mongoose_1.default.model('employees', employeesSchema);
exports.default = EmployeesModel;
