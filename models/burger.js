var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create(name, cb);
  },
    
  update: function(id, cb) {
    orm.update(id, cb);
  }
};

module.exports = burger;
