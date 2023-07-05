// import { randomBytes } from "crypto";
// import mongoose from "mongoose";
//import bcrypt from "bcryptjs";

import Student from "./models/Student.js";
import Stuclass from "./models/Stuclass.js";

const resolvers = {
  Query: {
    async students() {
      const student = await Student.find({});
      return student;
    },
    async stuclasses() {
      const classes = await Stuclass.find({});
      return classes;
    },
    stuclass: (_, { name }) =>
      Stuclass.find((stuclass) => stuclass.name == name),
    //student: (_, { email }) => Student.find((student) => student.email == email),
    async student(_, { email, name, rollno }) {
      const student = await Student.findOne({ email, name, rollno });
      if (!student) {
        throw new Error("No data Found");
      }
      return student;
    },
  },
  Stuclass: {
    async Student(parent) {
      return await Student.find({ class: parent._id });
    },
  },
  Mutation: {
    rigsterstudent: async (_, { userNew }) => {
      const student = await Student.findOne({ email: userNew.email });
      if (student) {
        throw new Error("student already exits");
      }
      const newuser = new Student({
        name: userNew.name,
        rollno: userNew.rollno,
        class: userNew.class,
        email: userNew.email,
      });
      return await newuser.save();
    },
    updateStudent: async (_, { email, studentupdate }) => {
      return await Stuclass.findOneAndUpdate({ email }, studentupdate, {
        new: true,
        upsert: true,
      });
    },
    deleteStudent: async (_, { email }) => {
      return Student.findOneAndDelete(email);
    },
    rigsterclass: async (_, { classNew }) => {
      const stuclass = await Stuclass.findOne({ name: classNew.name });
      if (stuclass) {
        throw new Error("Class Name already exits");
      }
      const newclass = new Stuclass({
        name: classNew.name,
      });
      return await newclass.save();
    },
    deleteClass: async (_, { name }) => {
      return Stuclass.findOneAndDelete(name);
    },
    updateClass: async (_, { name, classupdate }) => {
      return await Stuclass.findOneAndUpdate({ name }, classupdate, {
        new: true,
        upsert: true,
      });
    },
  },
};

export default resolvers;
