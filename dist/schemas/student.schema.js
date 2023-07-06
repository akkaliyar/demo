"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
exports.studentSchema = `#graphql
    scalar Date

    type Student {
        id:ID
        classId:String
        class:ClassDetails
        name:String
        roll:Int
        father:String
        address:String
        dob:Date
    }
    type ClassDetails {
        id:ID
        name:String
        head:String
        floor:String
    }
    input StudentInput {
        classId:String!
        name:String
        roll:Int!
        father:String
        address:String
        dob:Date
    }
    input StudentFilter {
        name:String
        roll:Int
        father:String
        limit:Int
        pageNo:Int
        classId:String
        sortField:StudentSortField
        sortOrder:StudentSortOrder
    }
    enum StudentSortField {
        NAME
        ROLL
        DOB
    }
    enum StudentSortOrder{
        ASC
        DESC
    }
    type StudentList {
        students:[Student!]!
        total:Int!
        limit:Int!
        pageNo:Int!
    }
    type Query {
        getAllStudents(filter:StudentFilter):StudentList
        getStudentById(id:ID):Student
        getStudentByClass(classId:ID):[Student]
    }
    type Mutation {
        addNewStudent(input:StudentInput!):Student
        updateStudent(id:ID,input:StudentInput!):Student
        deleteStudent(id:ID):Student
    }
`;
