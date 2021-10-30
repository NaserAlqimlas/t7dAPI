// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.PSQL_DEV_CONNECTION,
  },
  test: {
    client: "pg",
    connection: process.env.PSQL_TEST_CONNECTION,
  },
};
