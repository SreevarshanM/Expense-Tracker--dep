const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Routes/crudRoutes");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

///////////////////////////////////////////////////

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
console.log(process.env.DATABASE);

//DB CONNECTION
mongoose
  .connect(`${process.env.DATABASE}`, {
    keepAlive: true,
  })
  .then((con) => {
    console.log("DB Connection sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", router);

app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
