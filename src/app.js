const express = require('express');
const app = express();
const { createUserTable } = require('./models/user.model');
const userRoutes = require('./routes/user.routes');

app.use(express.json());

// Initialize user table
createUserTable();

// Use routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello! Your server is running.');
});

module.exports = app;