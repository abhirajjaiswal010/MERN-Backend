import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectToDB } from "./DB/db.js";
import router from "./Routes/book-routes.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectToDB();

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

//routes here

app.use('/api/books',router)

app.listen(PORT, () => {
  console.log("");

  console.log(`Server is running at http://localhost:${PORT}`);
});
