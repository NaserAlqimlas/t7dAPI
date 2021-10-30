exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Naser",
          last_name: "Alqimlas",
          telephone: "0096566776688",
          email: "supernasser@gmail.com",
          age: "24",
        },
        {
          first_name: "John",
          last_name: "Doe",
          telephone: "001720489804",
          email: "johnny.doe@gmail.com",
          age: "69",
        },
        {
          first_name: "Gandalf",
          last_name: "The Grey",
          telephone: "9999999999",
          email: "big.G@gmail.com",
          age: "24,000",
        },
      ]);
    });
};
