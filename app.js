//requiressss
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config({path: "./config.env"});

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
//apppp
const app = new express();
app.use(express.static("public"));

const ejs = require("ejs");
app.set("view engine" , "ejs");


app.listen( process.env.PORT || 3000, ()=>{
    console.log("server Running");
})