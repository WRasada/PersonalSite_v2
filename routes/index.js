var express  = require('express');
var router   = express.Router();
var passport = require('passport');
var User     = require('../models/user');

router.get('/', function(req, res){
  res.render('home', {title: 'Conor Hernandez'});
});

router.get('/about', function(req, res){
  res.render('about', {title: 'Conor Hernandez | About Me'});
});

router.get('/contact', function(req, res){
  res.render('contact', {title: 'Conor Hernandez | Contact Me'});
});

router.get('/gallery', function(req, res){
  res.render('gallery', {title: 'Conor Hernandez | Gallery'});
});

module.exports = router;
