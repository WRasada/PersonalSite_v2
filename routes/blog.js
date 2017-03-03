var express        = require('express'),
    router         = express.Router(),
    User           = require('../models/user'),
    Blog           = require('../models/blog'),
    Comment        = require('../models/comment'),
    passport       = require('passport');



router.get('/login', function(req, res){
  res.render('login', {title: 'Conor Hernandez'})
});

router.get('/register', function(req, res){
  res.render('register', {title: 'Conor Hernandez'})
});

router.get('/blog/new', function(req, res){
  res.render('blog/new', {title: 'Conor Hernandez'});
})

router.get('/blog', function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      res.redirect('home');
    } else {
      res.render('blog', {
                            title: 'Conor Hernandez | Blog',
                            blogs: blogs
                         });
    }
  })
});

router.post('/blog', function(req, res){
  // create blog
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render('blog/new', {title: 'Conor Hernandez'});
    } else {
      // then, redirect to index
      res.redirect('/blog');
    }
  });
});

router.post('/register', function(req, res){
  // var newUser = new User({username: req.body.username});
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err){
      req.flash('error', err.message);
      return res.redirect('/register');
    }
    passport.authenticate("local")(req, res, function(){
      req.flash('success', 'Welcome to YelpCamp ' + user.username);
      res.redirect('/blog');
    });
  });
});

router.post('/login', passport.authenticate('local',
{
  successRedirect: '/blog',
  failureRedirect: '/login',
}), function(req, res){

});

module.exports = router;
