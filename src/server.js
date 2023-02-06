const express = require('express');
const server = express();

server.get('/', (_, res) => res.status(200).send('yayyyyyyy!'));

server.get('/home', (_, res) => res.send('Welcome home!'));

server.get('/bye', (_, res) => res.send('See ya later, alligator!'));

server.get('/food', (_, res) => res.send('Why yes I am hungry!'));

module.exports = server;
