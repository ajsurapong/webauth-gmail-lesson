const router = require("express").Router();
const passport = require("passport");

//go to login page
router.get("/login", (req, res) => {
    //if user already logged in
    if(req.user) {
        res.redirect("/");
    }
    //if not yet log in
    res.render("login", {user: req.user});
});

//logout
router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/");
});

//authenticate with google using passport middleware
router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));

//redirect function after login with passport is successful
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect("/profile");
});

module.exports = router;