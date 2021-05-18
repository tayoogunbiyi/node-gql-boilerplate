require('dotenv').config();

const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers')

const typeDefs = require('./typeDefs')

const app = express();

const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
  })
);

module.exports = app;
