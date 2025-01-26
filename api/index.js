require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connect-mongo");
const app = express();
const userCreate = require("./routes/signup");
const cors = require("cors");

// middlewares
app.use(cors());
app.use(express.json());

// connection
connectDB();

// routes
app.use("/",userCreate);

app.listen(process.env.PORT, () => console.log("Server ready on port 3000."));

module.exports = app;
