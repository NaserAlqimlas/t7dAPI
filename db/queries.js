const knex = require("./knex"); // the connection!

// all queries will go here
module.exports = {
  getAll() {
    return knex("events");
  },
  getOne(id) {
    return knex("events").where("id", id).first();
  },
  create(event) {
    return knex("events").insert(event, "*");
  },
};
