const express = require("express");

const app = express();

// set view engine
app.set("view engine", "ejs");
//the default directory for view engine is "views"
//so if the directory is "./web"
// app.set('views', path.join(__dirname, 'web'));

//=========== routes ==============
//root route
app.get("/", (req, res) => {
    res.render("home");
})

//start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server starts at port " + PORT);
});