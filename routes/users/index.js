const users= require('express').Router();
const getUser = require('./getUser');

users.get("/", getUser);

module.exports = users;