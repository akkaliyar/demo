// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Stuclass {
    _id: ID!
    name: String
    Student:[Student]
  }
  type Student {
    _id:ID!
    rollno: String
    name: String
    class:String
    email:String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    stuclasses:[Stuclass]
    stuclass(name:String!):Stuclass
    students:[Student]
    student(email:String,name:String,rollno:String):Student
  }
  type Mutation {
    rigsterclass(classNew:classInput!):Stuclass
    updateClass(name:String,classupdate:classInput!):Stuclass
    deleteClass(name:String):Stuclass
    rigsterstudent(userNew:studentInput):Student
    updateStudent(email:String,studentupdate:studentInput!):Student
    deleteStudent(email:String):Student
  }
  input classInput{
    name:String!
  }
  input studentInput{
    rollno:String!,
    name:String!,
    class:String!,
    email:String!,
  }
`;
export default typeDefs