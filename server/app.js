const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();
server.applyMiddleware({ app });

const host = 'localhost';
const port = 4000;

app.listen(port, host, () => {
    console.log(`Server is running on port http://localhost:${port}${server.graphqlPath}`);
});
