const User = require("../models/User");

module.exports = (req , res) => {
    User.create({ ...req.body , secret_code : Math.floor(Math.randon() * 100000) }, (error,user) =>{
        if(error){
            const vaidationErrors = Object.keys(error.errors).map(key => errors.error[key].message);
            req.flash("data" , req.body )
            return res.redirect("/sign_up");
        } 
        res.redirect("/")
    })
}