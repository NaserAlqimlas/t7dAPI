const express = require("express");
const router = express.Router();
/*
  TODO: all endpoints are going to need user auth
*/

const queries = require("../db/queries");

const isValidId = (req, res, next) => {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID."));
};

const isValidEvent = (event) => {
  const hasName = typeof event.name === "string" && event.name.trim != "";
  // TODO: validate date and time
  const hasLong = typeof event.long === "number";
  const hasLat = typeof event.lat === "number";
  const hasSport = typeof event.sport === "string" && event.name.trim != "";
  return hasName && hasLong && hasLat && hasSport;
};

router.get("/", (req, res) => {
  queries
    .getAll()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => console.error("Error: ", err));
});

router.get("/:id", isValidId, (req, res) => {
  const { id } = req.params;
  queries
    .getOne(id)
    .then((event) => {
      if (event) res.json(event);
      else res.sendStatus(404);
    })
    .catch((err) => console.error("Error: ", err));
});

router.post("/", (req, res) => {
  if (isValidEvent(req.body)) {
    queries.create(req.body).then((event) => res.json(event[0]));
  } else res.sendStatus(500);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  console.log(`DELETE /events/${id}`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  console.log(`PATCH /events/${id}`);
});

module.exports = router;
