// Update with your config settings.
module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_CONNECTION,
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
