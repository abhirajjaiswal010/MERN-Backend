const express = require('express');
const app = express();

// set EJS as view engine
app.set('view engine', 'ejs');

// route
app.get('/', (req, res) => {
  const user = "Abhi";
  const skills = ["JavaScript", "Node.js", "CSS"];

  res.render('index', { user, skills });
});
app.get('/about', (req, res) => {
  

  res.render('about',{title:"about page" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});