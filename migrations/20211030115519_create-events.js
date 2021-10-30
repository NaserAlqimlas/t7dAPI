exports.up = function (knex) {
  const createUserTable = () => {
    return knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.text("first_name");
      table.text("last_name");
      table.text("telephone");
      table.text("email");
      table.text("age");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
  };

  const createEventTable = () => {
    return knex.schema.createTable("events", (table) => {
      table.increments("id").primary();
      table.integer("user_id").references("id").inTable("users");
      table.text("name");
      table.date("date");
      table.time("time");
      table.decimal("long");
      table.decimal("lat");
      table.text("sport");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
  };

  return Promise.all([createUserTable(), createEventTable()]);
};

exports.down = function (knex) {
  const dropEventTable = () => knex.schema.dropTableIfExists("events");
  const dropUserTable = () => knex.schema.dropTableIfExists("users");

  return Promise.all([dropEventTable(), dropUserTable()]);
};
