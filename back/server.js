require('./db/db');
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const rutas = require('./routes/index');

app.use(volleyball);

app.use(session({ secret: 'sovietica' }));

app.use(passport.initialize());
app.use(passport.session());

// PASSPORT LOCALSTRATEGY

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'clave',
    },
    function (email, clave, done) {
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(clave, user.salt).then((hash) => {
            if (hash !== user.clave) {
              return done(null, false); // invalid password
            }
            return done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.use('/api', rutas);

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/' + 'index.html');
});

//error middleware
app.use((err, req, res, next) => {
  res.sendStatus(404).send(err);
});

app.listen(3000, () => console.log('listenning on port 3000'));
