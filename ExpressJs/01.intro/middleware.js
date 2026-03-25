const express = require('express');
const app = express();

// Middleware
const logger = (req, res, next) => {
  console.log(new Date().toLocaleDateString());

  next();
};

app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/users', (req, res) => {
  res.send('Users Page');
});
app.get('/product', (req, res) => {
  res.send('product Page');
});

// Server
app.listen(3000, () => {
  console.log('http://localhost:3000');
});