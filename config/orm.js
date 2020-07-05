const connection = require("./connection");

////////////////////////////

const orm = {
  selectAll: (table, cb) => {
    const onQuery = (err, result) => {
      if (err) throw err;
      cb(result);
    };
    connection.query("SELECT * FROM ??", [table], onQuery);
  },

  insertOne: (table, newburger, cb) => {
    const onQuery = (err, result) => {
      if (err) throw err;
      cb(result);
    };

    connection.query(
      `INSERT INTO ${table} (burger_name, devoured) VALUES (?, false);`,
      [newburger],
      onQuery
    );
  },

  updateOne: (table, devouredStatus, id, cb) => {
    let changeDevour = () => {
      if (devouredStatus === "true") {
        return false;
      } else if (devouredStatus === "false") {
        return true;
      } else {
        return null;
      }
    };

    console.log(typeof devouredStatus);

    let updatedDevour = changeDevour();

    const onQuery = (err, result) => {
      if (err) throw err;
      cb(result);
    };

    connection.query(
      //UPDATE burgers SET devoured=true WHERE id = 2
      `UPDATE ${table} SET devoured=? WHERE id=?`,
      [updatedDevour, id],
      onQuery
    );
  },

  deleteOne: (table, id, cb) => {
    const onQuery = (err, result) => {
      if (err) throw err;
      cb(result);
    };

    connection.query(
      `delete FROM ff9l1d6xo5gowve.${table} WHERE id = ?`,
      [id],
      onQuery
    );
  },
};

module.exports = orm;
