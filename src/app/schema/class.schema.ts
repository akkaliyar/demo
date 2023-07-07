import { gql } from 'apollo-angular';
export const GetAllClasses = gql`
query Query($filter: ClassFilter) {
  getAllClasses(filter: $filter) {
    classes {
      name
      id
      head
      floor
    }
    total
    limit
    pageNo
  }
}`;
export const DeleteClass = gql`
  mutation DeleteClass($deleteClassId: ID) {
    deleteClass(id: $deleteClassId) {
      name
      head
      floor
      id
    }
  }`;
export const GetClassById = gql`
  query GetClassById($getClassId: ID) {
    getClass(id: $getClassId) {
      name
      id
      head
      floor
    }
  }`;
  export const AddNewClass = gql`
  mutation AddNewClass($input: ClassInput!) {
    addNewClass(input: $input) {
      id
      name
      head
      floor
    }
  }`;
  export const UpdateClass = gql`
  mutation UpdateClass($input: ClassInput!, $updateClassId: ID) {
    updateClass(input: $input, id: $updateClassId) {
      name
      head
      id
      floor
    }
  }`;
