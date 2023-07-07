import { gql } from 'apollo-angular';
export const Get_Students = gql`
query GetAllClasses($filter: StudentFilter) {
  getAllStudents(filter: $filter) {
    students {
      classId
      id
      class {
        name
      }
      name
      roll
      father
      address
      dob
    }
    total
    limit
    pageNo
  }
}  
`;
export const deleteStudent = gql`
  mutation deleteStudent($deleteStudentId: ID) {
    deleteStudent(id: $deleteStudentId) {
      classId
      name
      roll
      class {
        name
        head
        floor
      }
    }
  }
`;
export const Get_StudentByIdId = gql`
  query Get_StudentByIdId($getStudentByIdId: ID) {
    getStudentById(id: $getStudentByIdId) {
      class {
        name
      }
      name
      id
      roll
      father
      address
      dob
      classId
    }
  }
`;
export const AddNewStudent = gql`
  mutation AddNewStudent($input: StudentInput!) {
    addNewStudent(input: $input) {
      id
      classId
      name
      roll
      father
      address
      dob
    }
  }
`;
export const UpdateStudent = gql`
  mutation UpdateStudent($input: StudentInput!, $updateStudentId: ID) {
    updateStudent(input: $input, id: $updateStudentId) {
      id
      classId
      name
      roll
      father
      address
      dob
    }
  }
`;
export const studentsearch = gql`
  query Query($classId: ID) {
    getStudentByClass(classId: $classId) {
      classId
      name
      roll
      father
      address
      dob
      class {
        name
        id
      }
    }
  }
`;
