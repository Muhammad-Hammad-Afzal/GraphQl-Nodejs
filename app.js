import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import mongoose from 'mongoose'
import typeDefs from "./graphql/typedefs.js"
import resolvers from './graphql/resolvers.js'


const server = new ApolloServer({
    typeDefs,
    resolvers
})

await mongoose.connect("mongodb://localhost/graphql").then(console.log("Connected to database"))
const { url } = await startStandaloneServer(server, {
    listen: {port: 8000}
})

console.log(`server started successfully at ${url}`)