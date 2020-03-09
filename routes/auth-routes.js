const router = require("express").Router();
const passport = require("passport");

//go to login page
router.get("/login", (req, res) => {
    res.render("login");
});

//authenticate with google using passport middleware
router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.send("You have logged in and are redirected here");
});

module.exports = router;