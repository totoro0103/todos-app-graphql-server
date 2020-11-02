const { ApolloServer, gql } = require('apollo-server');
import typeDefs from './typeDefs'
import resolvers from './resolvers'
const mongoose = require('mongoose');

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await mongoose.connect('mongodb+srv://Thehoang12:Thehoang12@cluster0.xuqql.mongodb.net/book?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

startServer()