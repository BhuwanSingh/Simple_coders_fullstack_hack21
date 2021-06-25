const express = require("express")
const app = new express();
app.use(express.static("public"));

const ejs = require("ejs");
app.set("view engine" , "ejs");


app.listen( 3000 || port.env.PORT , ()=>{
    console.log("server Running");
})