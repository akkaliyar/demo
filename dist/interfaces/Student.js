"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStudentFilterSortField = exports.IStudentFilterSortOrder = void 0;
var IStudentFilterSortOrder;
(function (IStudentFilterSortOrder) {
    IStudentFilterSortOrder["ASC"] = "ASC";
    IStudentFilterSortOrder["DESC"] = "DESC";
})(IStudentFilterSortOrder || (exports.IStudentFilterSortOrder = IStudentFilterSortOrder = {}));
var IStudentFilterSortField;
(function (IStudentFilterSortField) {
    IStudentFilterSortField["NAME"] = "name";
    IStudentFilterSortField["ROLL"] = "roll";
    IStudentFilterSortField["DOB"] = "dob";
})(IStudentFilterSortField || (exports.IStudentFilterSortField = IStudentFilterSortField = {}));
