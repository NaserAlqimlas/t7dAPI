const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.status(200).json({ message: "hi" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server started on port: ${process.env.PORT}`)
);
