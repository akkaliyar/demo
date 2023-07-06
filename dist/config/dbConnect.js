"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const _1 = __importDefault(require("."));
mongoose_1.default.connection.on("connected", () => {
    console.log("Connected to database");
});
mongoose_1.default.connection.on("error", (err) => {
    console.error(`Database connection error: ${err}`);
    process.exit(1);
});
mongoose_1.default.connection.on("disconnected", (res) => {
    console.log("Disconnected from database", res);
});
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let url = _1.default.MONGO_URI();
        yield mongoose_1.default.connect(url, { retryWrites: false }).then(res => console.log(`DB Connected to ${_1.default.MONGO_DB}`));
    }
    catch (err) {
        console.log(`DB not connected due to => ${JSON.stringify(err)}`);
    }
});
exports.default = connectToDB;
