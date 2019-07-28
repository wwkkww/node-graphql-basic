// import myLocation, { message, name, getGreeting } from './myModule'
// import add, {substract} from './math'
import { GraphQLServer } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'

// Resolvers (functions)

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    User,
    Post,
    Comment
  },
  context: {
    db
  }
})

server.start(() => {
  console.log('Server is up')
})