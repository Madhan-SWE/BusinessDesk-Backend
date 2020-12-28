const users= require('express').Router();
const getUser = require('./getUser');

users.get("/t", getUser);

module.exports = users;