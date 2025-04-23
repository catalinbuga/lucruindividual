import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { response } from "express";

// login user
const loginUser = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({success:false,message:"Utilizatorul nu există"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({success:false,message:"Date de autentificare invalide"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})  
    }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//inregistrare user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //verificare daca userul exista deja
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "Acest utilizator există deja",
      });
    }

    //validarea email format & cate e de puternica parola
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Introduceți un email valid",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Parola trebuie să fie mai puternică",
      });
    }

    //hasarea parolei la user

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
