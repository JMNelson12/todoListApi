const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

const mongoose = require('mongoose'),
      Task = require('./api/models/todoListModel');

const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoDB');

/* Middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes');
routes(app);
      
app.listen(port, () => {
  console.log(`todo list RESTful API server started on: ${port}`);
});

