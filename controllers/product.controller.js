var dbCon = require("../config/db_connection");

var connection = dbCon.getConnection();

connection.connect();

var express = require("express");

var router = express.router();