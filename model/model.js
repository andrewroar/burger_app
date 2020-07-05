const orm = require("../config/orm.js");

const burgerModel = {
  // The variables cols and vals are arrays.
  all: function (cb) {
    orm.selectAll("qff9l1d6xo5gowve", cb);
  },
  insert: function (cols, cb) {
    orm.insertOne("burgers", cols, cb);
  },

  update: function (newDevourStatus, id, cb) {
    orm.updateOne("burgers", newDevourStatus, id, cb);
  },
  delete: function (id, cb) {
    orm.deleteOne("burgers", id, cb);
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burgerModel;
