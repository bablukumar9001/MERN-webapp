const express = require("express");
const User = require("../models/user-models");
const bcrypt = require("bcrypt")


// const home = async (req, res) => {
//   try {
//     res.status(200).send("This is the home page using the controller");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// };

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    // Check if the user already exists
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Create the user if not already registered
    const userCreated = await User.create({ username, email, phone, password });

    const token = await userCreated.generateToken();


    res.status(200).json({
      msg: "registration successfull",
      token: token,
      userId: userCreated._id.toString(),
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


const login = async (req, res) => {

  try {
    console.log(req.body);
    
    const { email, password } = req.body;
    const userExist = await User.findOne({ email })
    console.log(userExist)
    if (!userExist) {
      return res.status(400).json({ message: "invalid credentials" })
    }


    // const user = userExist.comparePasswords(password)
    const user = await bcrypt.compare(password, userExist.password)


    if (user) {
      res.status(200).json({
        msg: "login successfully",
        tokenn: await userExist.generateToken(),
        userId: userExist._id.toString()
      })
    }
    

  } catch (error) {
    console.log(error);
    

  }

}


const user = async (req,res)=>{
  try {
    const userData= req.user;
    console.log(userData);

    res.status(200).json({userData})
    
    
  } catch (error) {
    console.log(`error from the user  route ${error}`);
    
    
  }
   
}




module.exports = {register, login, user };
