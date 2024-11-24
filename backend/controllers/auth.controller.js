import userModel from "../models/authModels.js";
import bcrypt from "bcrypt";
import genToken from "../utils/genToken.js";

export const signup = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      throw new Error("all fields are required");
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw new Error("user already exists ");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      email,
      userName,
      password: hashedPassword,
    });

    genToken(newUser._id, res);
    console.log("account created");
    res.status(201).json({
      _id: newUser._id,
      userName,
      email,
    });
  } catch (error) {
    console.log("error in the signup route:", error.message);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("all fields are required");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("this email is not registered");
    }

    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      throw new Error("wrong password");
    }

    genToken(user._id, res);
    console.log("user logged in");
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      email,
    });
  } catch (error) {
    console.log("error in the login route:", error.message);
    next(error);
  }
};

export const logout = (req, res, next) => {
  try {
    res.clearCookie("authToken");
    res.status(200).json("Logged out successfully");
  } catch (error) {
    console.log("error in the logout route:", error.message);
    next(error);
  }
};
