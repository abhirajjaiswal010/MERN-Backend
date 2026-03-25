const express = require('express');
const app = express();

// Property
app.set('env', 'development');

// Middleware
app.use(express.json());

// Route
app.get('/users', (req, res) => {
  res.send("Users list");
});

// Start server
let port=3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
