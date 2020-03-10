# Web authentication using Gmail and Passport.js
## Use VScode for Git and IDE

### branch master: Installation and preparation
* npm init
* npm i express nodemon passport passport-google-oauth ejs body-parser cookie-session mysql
* create .gitignore, add node_modules/
* add git to this project, set git username and email (you can use Git Graph)
* create app.js
* create folder "views" and add "home.ejs"
* npx nodemon app.js
* test with "localhost:3000"
* commit master branch

* Visit https://console.developers.google.com or shortcut at https://developers.google.com/identity/sign-in/web/sign-in
* create a project
* at credentials menu, create new credentials (oauth), select web app
* set "Authorized JavaScript origins" to http://localhost:3000 
* set "Authorized redirect URIs" to http://localhost:3000/auth/google/redirect
* note "client_id" and "client_secret"

=============================
### branch lesson01: auth routes and login page
* create folder "routes" and file "auth-routes.js"
* add file "login.ejs" to folder "views"

=============================
### branch lesson02: passport setup
* create folder "config" and file "passport-setup.js"
* creat "key.js" in "config" to add client_id and client_secret
* add "key.js" to .gitignore
* modify "auth-routes.js" for "/google" service
* import "passport-setup" to app.js

=============================
### branch lesson03: passport callback function
* Till now we can login using Google. Next we need to get user's profile and email
* modify "auth-routes.js" for "/google/redirect" service
* modify "passport-setup.js" for callback
* Observe that you can show user's info but the redirect does not happen

=============================
### branch lesson04: serializing user and cookie
* If we need user info after loggin in for any webpages, we need to serialize and deserialize it
* modify "passport-setup.js" for serialize and deserialize
* modify "app.js" to import "cookie-session" and config cookie middleware
* add cookie secret key to "key.js"
* add middleware "passport.initialize" and "passport.session" to "app.js"
* modify "auth-routes.js" for "/google/redirect" service to show "req.user" which is globally accessed via cookie and session

=============================
### branch lesson05: profile page and prevent non-login user
* create "profile.ejs" in "views"
* create "profile-routes.js" in "routes" to render "profile.ejs"
* add middleware "/profile" to "app.js"
* add middleware to protect "/profile" in "profile-routes.js"
* modify "auth-routes.js" for "/google/redirect" to redirect to "/profile"
* try to sign user out or user private window and jump directly to "http://localhost:3000/profile"

=============================
### branch lesson06: logout
* add "/logout" to "auth-routes.js"
* add "logout" menu to every webpages
* use ejs "if" to show login or logout menu properly
* modify "/" in "app.js" and "/login" in "auth-routes.js" to send "req.user" to ejs
