//requiressss
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

//database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful!"));

const app = new express();
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ejs = require("ejs");
app.set("view engine", "ejs");

const mainController = require("./controllers/mainPage");
app.get("/", mainController);

const loginController = require("./controllers/loginPage");
app.get("/login", loginController);

const verifier = require("./controllers/loginUser");
app.post("/users/login", verifier);

const registerController = require("./controllers/sign_upPage.js");
app.get("/sign_up", registerController);

const useradder = require("./controllers/newUser");
app.post("/user/store", useradder);

const registration = require("./controllers/registration");
app.get("/registration", registration);

app.use((req, res) => res.render("notfound"));

app.listen(process.env.PORT || 3000, () => {
  console.log("server Running");
});
