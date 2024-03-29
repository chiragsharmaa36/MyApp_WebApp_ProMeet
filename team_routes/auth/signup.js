const express = require('express');
const route = express.Router();
//Authorized
const { notAuthorize } = require('../../security_functions/authenFunc');
const user = require('../../data_schema/user');
//Not Authorized
route.get('/', notAuthorize, (req, res) => {
  res.render('auth/signup.ejs', { tabName: 'Register Promeet' });
});
//authenticating
route.post('/', notAuthorize, (req, res) => {
  console.log(req.body);
  user.findOne({ username: req.body.username }, (err, data) => {
    if (err) console.log(err);
    if (data) {
      req.flash('err', 'Username Already taken');
      res.redirect('/signup');
    } else {
      user({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }).save((err, data) => {
        req.flash('success', 'Signup Successful');
        res.redirect('/signup');
      });
    }
  });
});

module.exports = route;
