var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/NPC';

var connectToSQLDatabase = function() {
  pg.connect(connectionString);
};

module.exports = { connect: connectToSQLDatabase };
