const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

/*
TODO:
  * Implement jwt/passport for user auth
  * Implement models
*/

app.use(express.json());
// routes relating to events CRUD
app.use("/events", require("./routes/events"));

app.listen(process.env.PORT, () =>
  console.log(`Server started on port: ${process.env.PORT}`)
);
