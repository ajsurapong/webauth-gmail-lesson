const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const key = require("./key");

//serialize user data to cookie for session, called by passport.use() below
passport.serializeUser((user, done) => {
    //done(err, id);
    done(null, user);
});

//deserialize user data from session for using in any web pages
passport.deserializeUser((id, done) => {
    //id comes from serialized cookie
    //generally we query user data by id from database
    // assume that we don't query DB and only deserialize the saved serialized cookie
    done(null, id);
});

passport.use(
    new GoogleStrategy({
        clientID: key.google.clientID,
        clientSecret: key.google.clientSecret,
        callbackURL: "/auth/google/redirect"
    }, (accessToken, refreshToken, profile, done) => {
        // console.log(profile);
        // TODO: check if email exists in database
        if(profile.emails[0].value != "surapong@mfu.ac.th") {            
            done(null, false);
            // this will call "failureRedirect" option in redirect callback above
        }
        else {
            //create data for serializing, assume that we need email and photo
            const user = { "email": profile.emails[0].value, "photo": profile.photos[0].value };
            //serialize
            done(null, user);
        //after this, it will call the callbackURL above
        }        
    })
);