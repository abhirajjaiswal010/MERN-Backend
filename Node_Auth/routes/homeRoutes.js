import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
export const router = express.Router();

router.get("/welcome",authMiddleware, (req, res) => {
    const {username,userId,role}=req.userInfo;

  res.json({
    msg: "welcome to the home",
    user:{
        _id:userId,
        username:username,
        role:role
    }
  });
});
