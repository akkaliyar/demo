import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from '../schema.js';
import mongoose from "mongoose";
import { MONGO_URL } from '../config.js';
mongoose.connect(MONGO_URL);
mongoose.connection.on("connected", () => {
    console.log('connected');
});
mongoose.connection.on("error", (err) => {
    console.log('Not connected', err);
});
import '../models/Stuclass.js';
import '../models/Student.js';
import resolvers from '../resolvers.js';
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
