"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_schema_1 = require("./class.schema");
const student_schema_1 = require("./student.schema");
const typeDefs = [
    class_schema_1.classSchema,
    student_schema_1.studentSchema
];
exports.default = typeDefs;
