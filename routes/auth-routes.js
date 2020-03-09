const router = require("express").Router();
const passport = require("passport");

//go to login page
router.get("/login", (req, res) => {
    res.render("login");
});

//authenticate with google using passport middleware
router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));

//redirect function after login with passport is successful
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.send(req.user);
});

module.exports = router;