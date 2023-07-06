"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_controller_1 = require("./class.controller");
const student_controller_1 = require("./student.controller");
const resolvers = [
    class_controller_1.classController,
    student_controller_1.studentController
];
exports.default = resolvers;
