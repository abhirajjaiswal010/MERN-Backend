import UserModel from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const checkExistingUser = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (checkExistingUser) {
      return res.status(409).json({
        success: false,
        message:
          "User is already exists either with same username or same email",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //create a new user and save in your db

    const newlyCreateUser = new UserModel({
      username,
      email,
      password: hashPassword,
      role: roles || "user",
    });

    await newlyCreateUser.save();

    if (newlyCreateUser) {
      res.status(201).json({
        success: true,
        msg: "user registered successfully",
        data: newlyCreateUser,
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "unable to register user ",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      msg: "some error occured",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, msg: "user not found" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        msg: "password is incorrect",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    );
    return res.status(200).json({
      success: true,
      msg: "Login successful",
      token: token,
      data: user,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      msg: "some error occurred",
    });
  }
};
