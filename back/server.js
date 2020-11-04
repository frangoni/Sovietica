const express = require("express");
const app = express();
const volleyball = require("volleyball");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const LocalStrategy = require('passport-local').Strategy
const User = require('./models/User');
const { db } = require("./models/User");
// const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const rutas = require("./routes/index");

app.use(volleyball);

app.use(session({ secret: "sovietica" }));

app.use(passport.initialize());
app.use(passport.session());

// PASSPORT LOCALSTRATEGY

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(password, user.clave).then((hash) => {
            if (hash !== user.clave) {
              return done(null, false); // invalid password
            }
 
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);

// PASSPORT GOOGLE

// passport.use(new GoogleStrategy({
//   consumerKey: GOOGLE_CONSUMER_KEY,
//   consumerSecret: GOOGLE_CONSUMER_SECRET,
//     // hay que cambiarlo dependiendo de nuestra URL
//   callbackURL: "http://www.example.com/auth/google/callback"
// },
// function(token, tokenSecret, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
// }
// ));

// PASSPORT FACEBOOK

// passport.use(new FacebookStrategy({
//   clientID: FACEBOOK_APP_ID,
//   clientSecret: FACEBOOK_APP_SECRET,
//   // hay que cambiarlo dependiendo de nuestra URL
//   callbackURL: "http://www.example.com/auth/facebook/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   User.findOrCreate(..., function(err, user) {
//     if (err) { return done(err); }
//     done(null, user);
//   });
// }
// ));



passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (_id, done) {
  User.findById(_id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", rutas);

app.use("/", express.static(path.join(__dirname, "public")));
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});


//error middleware
app.use((err, req, res, next) => {
  res.sendStatus(404).send(err)
})


app.listen(3000, () => console.log("listenning on port 3000"));


