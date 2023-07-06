"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const classSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    head: {
        type: String,
        required: true
    },
});
const ClassModel = mongoose_1.default.model("class", classSchema);
exports.ClassModel = ClassModel;
