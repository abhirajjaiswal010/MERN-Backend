import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { isAdminUser } from "../middlewares/adminMiddleware.js";
import { upload as uploadMiddleware } from "../middlewares/upload_middleware.js";
import { uploadImage as uploadImageAsController } from "../controllers/imageController.js";

export const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  isAdminUser,
  uploadMiddleware.single("image"),
  uploadImageAsController,
);
