"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const studentSchema = new mongoose_1.default.Schema({
    classId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true
    },
    father: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
});
const StudentModel = mongoose_1.default.model("student", studentSchema);
exports.StudentModel = StudentModel;
