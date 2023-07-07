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
const Class_1 = require("../interfaces/Class");
const class_model_1 = require("../models/class.model");
/**
 * Add a new class in DB
 * @param classData : IClass
 * @returns Promise<IClass | Error>
 */
const addClassProcess = (classData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newClass = new class_model_1.ClassModel(classData);
        yield newClass.save();
        return newClass;
    }
    catch (error) {
        return Error(JSON.stringify(error));
    }
});
/**
 * Update an existing data by id
 * @param classData : IClass
 * @returns Promise<IClass | Error | null>
 */
const updateClassProcess = (id, classData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateClass = yield class_model_1.ClassModel.findByIdAndUpdate(id, classData);
        return updateClass;
    }
    catch (error) {
        return Error(JSON.stringify(error));
    }
});
/**
 * Delete an existing data by id
 * @param classData : IClass
 * @returns Promise<IClass | Error | null>
 */
const deleteClassProcess = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteClass = yield class_model_1.ClassModel.findByIdAndDelete(id);
        return deleteClass;
    }
    catch (error) {
        return Error(JSON.stringify(error));
    }
});
/**
 * Get all classes from DB
 * @returns Promise<IClass[] | Error>
 */
const getAllClassesProcess = (filter = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let queryObj = {};
        let sort = {};
        filter.limit = filter.limit || 10;
        filter.pageNo = filter.pageNo || 1;
        const { name, head, floor, limit, pageNo, sortField, sortOrder } = filter;
        if (name) {
            queryObj['name'] = name;
        }
        if (head) {
            queryObj['head'] = head;
        }
        if (floor) {
            queryObj['floor'] = floor;
        }
        if (sortField) {
            sort[sortField.toLowerCase()] = ((sortOrder == Class_1.IClassFilterSortOrder.ASC) ? 1 : -1) || 1;
        }
        let skip = (pageNo - 1) * limit;
        let total = yield class_model_1.ClassModel.find(queryObj).count();
        let classes = yield class_model_1.ClassModel.find(queryObj).skip(skip).limit(limit).sort(sort);
        return { classes, total, limit, pageNo };
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
const getAClassProcess = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return class_model_1.ClassModel.findById(id);
    }
    catch (error) {
        return Error(JSON.stringify(error));
    }
});
const ClassService = {
    addClass: addClassProcess,
    getAllClasses: getAllClassesProcess,
    getAClass: getAClassProcess,
    updateClass: updateClassProcess,
    deleteClass: deleteClassProcess
};
exports.default = ClassService;
