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
exports.studentController = void 0;
const student_service_1 = __importDefault(require("../services/student.service"));
const studentController = {
    /** Graphql Queries */
    Query: {
        /**
         * Get all students query
         * @returns Promise<IStudent[] | Error>
         */
        getAllStudents: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const students = yield student_service_1.default.getAllStudents(args.filter);
                return students;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        }),
        /**
         * Get a student details  query
         * @param parent : any
         * @param args : any
         * @returns Promise<IStudent | Error | null>
         */
        getStudentById: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const student = yield student_service_1.default.getStudentById(args.id);
                return student;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        }),
        /**
         * Get a all student details query
         * @param parent : any
         * @param args : any
         * @returns Promise<IStudent[] | Error | null>
         */
        getStudentByClass: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const students = yield student_service_1.default.getStudentByClass(args.classId);
                return students;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        })
    },
    /** Graphql Mutations */
    Mutation: {
        /**
         * Add new student controller
         * @param parent : any
         * @param args : any
         * @returns Promise<IStudent | Error>
         */
        addNewStudent: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const addStudent = yield student_service_1.default.addStudent(args.input);
                return addStudent;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        }),
        /**
         * Update a student details controller
         * @param parent : any
         * @param args : IStudent
         * @returns Promise<IStudent | Error | null>
         */
        updateStudent: (parent, _a) => __awaiter(void 0, void 0, void 0, function* () {
            var { id } = _a, args = __rest(_a, ["id"]);
            try {
                const updateStudent = yield student_service_1.default.updateStudent(id, args.input);
                return updateStudent;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        }),
        /**
         * Delete a student controller
         * @param parent : any
         * @param args : IStudent
         * @returns Promise<IStudent | Error | null>
         */
        deleteStudent: (parent, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const deleteStudent = yield student_service_1.default.deleteStudent(id);
                return deleteStudent;
            }
            catch (error) {
                return Error(JSON.stringify(error));
            }
        }),
    }
};
exports.studentController = studentController;
