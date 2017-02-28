var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    flash          = require('connect-flash'),
    passport       = require('passport'),
    localStrategy  = require('passport-local'),
    methodOverride = require('method-override'),
    User           = require('./models/user');

var indexRoutes    = require('./routes/index');

var url = process.env.DATABASEURL || 'mongodb://localhost/conor_db';
mongoose.connect(url);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(flash());


// PASSPORT CONFIGURATION
app.use(require('express-session')({
  secret: "This is the best drawing ever",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

app.use('/', indexRoutes);

app.listen(process.env.PORT || 3000, process.env.IP);
