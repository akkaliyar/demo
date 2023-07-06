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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classController = void 0;
const class_service_1 = __importDefault(require("../services/class.service"));
const classController = {
    /** Graphql Queries */
    Query: {
        /**
         * Get all classes query
         * @returns Promise<IClass[] | Error>
         */
        getAllClasses: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const classes = yield class_service_1.default.getAllClasses(args === null || args === void 0 ? void 0 : args.filter);
                return classes;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        }),
        /**
         * Get a class details query
         * @param parent : any
         * @param args : any
         * @returns Promise<IClass | Error | null>
         */
        getClass: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const classData = yield class_service_1.default.getAClass(args.id);
                return classData;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        })
    },
    /** Graphql Mutations */
    Mutation: {
        /**
         * Add new class controller
         * @param parent : any
         * @param args : IClass
         * @returns Promise<IClass | Error>
         */
        addNewClass: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const addClass = yield class_service_1.default.addClass(args.input);
                return addClass;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        }),
        /**
         * Update a class details controller
         * @param parent : any
         * @param args : IClass
         * @returns Promise<IClass | Error | null>
         */
        updateClass: (parent, _a) => __awaiter(void 0, void 0, void 0, function* () {
            var { id } = _a, args = __rest(_a, ["id"]);
            try {
                const updateClass = yield class_service_1.default.updateClass(id, args.input);
                return updateClass;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        }),
        /**
         * Delete a class controller
         * @param parent : any
         * @param args : IClass
         * @returns Promise<IClass | Error | null>
         */
        deleteClass: (parent, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const deleteClass = yield class_service_1.default.deleteClass(id);
                return deleteClass;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        }),
    }
};
exports.classController = classController;
