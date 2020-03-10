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

