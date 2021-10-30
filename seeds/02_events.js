exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("events").insert([
        {
          user_id: 1,
          name: "retirement li3ib",
          date: "2021-11-4",
          time: "18:00:00",
          long: 48.00210699764928,
          lat: 29.38093221213262,
          sport: "football",
        },
        {
          user_id: 1,
          name: "thursday basketball",
          date: "2021-11-6",
          time: "21:00:00",
          long: 48.06720141988545,
          lat: 29.293834420101263,
          sport: "basketball",
        },
        {
          user_id: 2,
          name: "Volleyball",
          date: "2021-11-8",
          time: "17:00:00",
          long: 48.04070522425589,
          lat: 29.33862423338375,
          sport: "volleyball",
        },
      ]);
    });
};
