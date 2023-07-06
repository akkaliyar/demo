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
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const schemas_1 = __importDefault(require("./schemas"));
const controllers_1 = __importDefault(require("./controllers"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
(0, dbConnect_1.default)().then(() => __awaiter(void 0, void 0, void 0, function* () {
    const server = new server_1.ApolloServer({
        typeDefs: schemas_1.default,
        resolvers: controllers_1.default
    });
    const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: config_1.default.CONNECTION_PORT },
        context: ({ req, res }) => __awaiter(void 0, void 0, void 0, function* () {
            return req;
        })
    });
    console.log(`Server Running at : ${url}`);
    app.use((0, express4_1.expressMiddleware)(server));
}));
