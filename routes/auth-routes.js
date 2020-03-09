const router = require("express").Router();
const passport = require("passport");

//go to login page
router.get("/login", (req, res) => {
    res.render("login");
});

//authenticate with google using passport middleware
router.get("/google", (req, res) => {
    res.send("Loggin in by Google");
});

module.exports = router;