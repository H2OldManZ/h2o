// app/routes.js

var path = require('path');

module.exports = function(app) {


    app.get('/', function(req, res) {   //Main Page
		  res.render('index.ejs', { message: req.flash('indexMessage') });
	  });

    app.get('/WhoWeAre', function(req, res) {   //Main Page
      res.render('whoweare.ejs', { message: req.flash('indexMessage') });
    });

    app.get('/WhatWeBelieve', function(req, res) {   //Main Page
      res.render('whatwebelieve.ejs', { message: req.flash('indexMessage') });
    });

    app.get('/Partnerships', function(req, res) {   //Main Page
      res.render('partnerships.ejs', { message: req.flash('indexMessage') });
    });

    app.get('/GetConnected', function(req, res) {   //Main Page
      res.render('getconnected.ejs', { message: req.flash('indexMessage') });
    });
    app.get('/CommunityGroups', function(req, res) {   //Main Page
      res.render('communitygroups.ejs', { message: req.flash('indexMessage') });
    });
    app.get('/CommunityEngagement', function(req, res) {   //Main Page
      res.render('communityengagement.ejs', { message: req.flash('indexMessage') });
    });
    app.get('/Give', function(req, res) {   //Main Page
      res.render('give.ejs', { message: req.flash('indexMessage') });
    });
    app.get('/OurTeam', function(req, res) {   //Main Page
      res.render('ourteam.ejs', { message: req.flash('indexMessage') });
    });
    app.get('/Bekah', function(req, res) {   //Main Page
      res.render('bekah.ejs', { message: req.flash('indexMessage') });
    });
};
