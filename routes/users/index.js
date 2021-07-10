const users= require('express').Router();
const { use } = require('..');
const getUser = require('./getUser');
const createUser = require('./createUser');

console.log("Hello from routes")

users.get("/", getUser);
users.post("/", createUser);

module.exports = users;