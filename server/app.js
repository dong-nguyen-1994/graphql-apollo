const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const { connect } = require('./config/connectDB');

const mongooseData = require('./data/mongooseData');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongooseData })
});

const app = express();
server.applyMiddleware({ app });

// Connect DB
connect();

const host = 'localhost';
const port = 4000;

app.listen(port, host, () => {
    console.log(`Server is running on http://localhost:${port}${server.graphqlPath}`);
});
