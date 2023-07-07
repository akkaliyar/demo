"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const CONFIG = Object({
    MONGO_HOST: process.env.MONGO_HOST || "mongodb://127.0.0.1:27017/",
    MONGO_DB: process.env.MONGO_DB || "class-mng",
    CONNECTION_PORT: process.env.CONNECTION_PORT || 3000,
    MONGO_URI() {
        return this.MONGO_HOST + this.MONGO_DB;
    }
});
exports.default = CONFIG;
