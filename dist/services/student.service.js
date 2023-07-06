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
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("../interfaces/Student");
const student_model_1 = require("../models/student.model");
/**
 * Add a new class in DB
 * @param studentData : IStudent
 * @returns Promise<IStudent | Error>
 */
const addStudentProcess = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newStudent = new student_model_1.StudentModel(studentData);
        yield newStudent.save();
        return newStudent;
    }
    catch (error) {
        console.log("Add Error", error);
        return Error(JSON.stringify(error));
    }
});
/**
 * Update an existing data by id
 * @param studentData : IStudent
 * @returns Promise<IStudent | Error | null>
 */
const updateStudentProcess = (id, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateStudent = yield student_model_1.StudentModel.findByIdAndUpdate(id, studentData);
        return updateStudent;
    }
    catch (error) {
        return Error(JSON.stringify(error));
    }
});
/**
 * Delete an existing data by id
 * @param classData : IStudent
 * @returns Promise<IStudent | Error | null>
 */
const deleteStudentProcess = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteStudent = yield student_model_1.StudentModel.findByIdAndDelete(id);
        return deleteStudent;
    }
    catch (error) {
        return Error(JSON.stringify(error));
    }
});
/**
 * Get all classes from DB
 * @returns Promise<IClass[] | Error>
 */
const getAllStudentsProcess = (filter = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let queryObj = {};
        let sort = {};
        filter.limit = filter.limit || 10;
        filter.pageNo = filter.pageNo || 1;
        const { name, roll, father, classId, limit, pageNo, sortField, sortOrder } = filter;
        if (name) {
            if (name.match(/[a-z]/i)) {
                queryObj['name'] = { '$regex': name, '$options': 'i' };
            }
            else {
                queryObj['$or'] = [{ name: name }, { roll: parseInt(name) }];
            }
        }
        if (roll) {
            queryObj['roll'] = roll;
        }
        if (father) {
            queryObj['father'] = { '$regex': father, '$options': 'i' };
        }
        if (classId) {
            queryObj['classId'] = classId;
        }
        if (sortField) {
            sort[sortField.toLowerCase()] = ((sortOrder == Student_1.IStudentFilterSortOrder.ASC) ? 1 : -1) || 1;
        }
        else {
            sort["name"] = 1;
        }
        let skip = (pageNo - 1) * limit;
        let total = yield student_model_1.StudentModel.find(queryObj).count();
        let students = yield student_model_1.StudentModel.aggregate([
            { $match: queryObj },
            { $addFields: { "classObjectId": { "$toObjectId": "$classId" } } },
            { $addFields: { "id": { "$toString": "$_id" } } },
            {
                $lookup: {
                    from: "classes",
                    localField: "classObjectId",
                    foreignField: "_id",
                    as: "class"
                }
            },
            { $unwind: "$class" },
            { $limit: limit },
            { $skip: skip },
            { $sort: sort }
        ]);
        // console.log("students", students)
        //console.log("queryObj", queryObj)
        return { students, total, limit, pageNo };
    }
    catch (error) {
        console.log(error);
        return Error(JSON.stringify(error));
    }
});
/**
 * Get a perticular class details
 * @param id : String
 * @returns Promise<IClass | Error | null>
 */
const getStudentByIdProcess = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return student_model_1.StudentModel.findById(id);
    }
    catch (error) {
        return Error(JSON.stringify(error));
    }
});
/**
 * Get a perticular class details
 * @param id : String
 * @returns Promise<IClass | Error | null>
 */
const getStudentByClassProcess = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return student_model_1.StudentModel.find({ name: id });
    }
    catch (error) {
        return Error(JSON.stringify(error));
    }
});
const StudentService = {
    addStudent: addStudentProcess,
    getAllStudents: getAllStudentsProcess,
    getStudentById: getStudentByIdProcess,
    getStudentByClass: getStudentByClassProcess,
    updateStudent: updateStudentProcess,
    deleteStudent: deleteStudentProcess
};
exports.default = StudentService;
