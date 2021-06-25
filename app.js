const express = require("express")
const app = new express();
app.use(express.static("public"));

const ejs = require("ejs");
app.set("view engine" , "ejs");


app.listen( process.env.PORT || 3000, ()=>{
    console.log("server Running");
})