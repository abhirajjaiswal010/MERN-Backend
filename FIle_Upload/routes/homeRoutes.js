import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
export const router = express.Router();

router.get("/welcome", authMiddleware, (req, res) => {
  const { username, id, role } = req.userInfo;

  res.json({
    msg: "welcome to the home",
    user: {
      _id: id,
      username: username,
      role: role,
    },
  });
});
