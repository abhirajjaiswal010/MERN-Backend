import {
  addNewBooks,
  deleteTheBooks,
  getAllBooks,
  getSingleBooks,
  updateTheBooks,
} from "../Controllers/book_controllers.js";
import express from "express";
//create express router

const router = express.Router();

//all the routes

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBooks);
router.post("/add", addNewBooks);
router.put("/update/:id", updateTheBooks);
router.delete("/delete/:id", deleteTheBooks);

export default router;
