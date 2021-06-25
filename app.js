//requiressss
const express = require("express");
const app = new express();

const ejs = require("ejs");
app.set("view engine", "ejs");

app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

//database

const mongoose = require("mongoose");
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

const expressSession = require("express-session");
app.use(
  expressSession({
    secret: "keyboard cat",
  })
);

global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next();
});

const mainController = require("./controllers/mainPage");
app.get("/", mainController);

const loginController = require("./controllers/loginPage");
app.get("/login", loginController);

const admin_login = require("./controllers/adminLoginController");
app.get("/admin_login", admin_login);

const verifier = require("./controllers/loginUser");
app.post("/users/login", verifier);

const registerController = require("./controllers/sign_upPage.js");
app.get("/sign_up", registerController);

const useradder = require("./controllers/newUser");
app.post("/user/store", useradder);

const registration = require("./controllers/registration");
app.get("/registration", registration);

const van_system = require("./controllers/van_system");
app.get("/van_system", van_system);

app.use((req, res) => res.render("notfound"));

app.listen(process.env.PORT || 3000, () => {
  console.log("server Running");
});
