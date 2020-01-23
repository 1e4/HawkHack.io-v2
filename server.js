const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const defaults = require("./config/defaults.json");

//import keys
const { port, dburi } = require("./config/keys");

//import route files
const users = require("./routes/api/user");
const profile = require("./routes/api/profile");
const admin = require("./routes/api/admin");

//initialize express app
const app = express();

//body parse middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "/client/build")));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//connect to db
mongoose
  .connect(dburi, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => console.log(err));
mongoose.set("useFindAndModify", false);

//Use Routes
app.use("/api/u", users);
app.use("/api/p", profile);
app.use("/api/a", admin);

app.get("/api", (req, res) => {
  res.status(200).json({ Event: defaults.Event, Schedule: defaults.Schedule });
});

app.get("/", (req, res) => {
  console.log("OH YEAH");
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});
