const knex = require("./knex"); // the connection!

// all queries will go here
module.exports = {
  getAll() {
    return knex("events");
  },
};
