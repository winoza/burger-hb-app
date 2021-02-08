
// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  create: function(col, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + col + "', false)"

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: function(id, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = " + id

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
