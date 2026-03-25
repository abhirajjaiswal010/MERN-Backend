const express = require("express");
const app = express();

// Move outside (global scope)
const users = [
  { id: 1, name: "Abhi" },
  { id: 2, name: "Rahul" },
];

// Home route
app.get("/", (req, res) => {
  res.send("welcome to our home pages");
});

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// Get user by name
app.get("/users/name/:name", (req, res) => {
  const userName = req.params.name;

  const user = users.find(u => u.name === userName);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});