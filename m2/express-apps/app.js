// require npm packages
const path = require('path');
const express = require('express');

// require your own modules (router, models)

// create app connect to db

// -- setup the app

// configure middlewares (static, session, cookies, body, ...)
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// -- routes

// -- 404 and error handler

// NOTE: requires a views/not-found.ejs template
app.use((req, res, next) => {
  res.status(404);
  res.render('not-found');
});

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

module.exports = app;
