const express = require("express");
const router = express.Router();
/*
  TODO: all endpoints are going to need user auth
*/

const queries = require("../db/queries");

router.get("/", (req, res) => {
  queries
    .getAll()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => console.error("Error: ", err));
});

router.post("/", (req, res) => {
  console.log("POST /events");
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
