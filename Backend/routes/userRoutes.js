const express = require("express");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const router = express.Router();

//Route POST -> /api/users/register
//Registering a new user
//Access -> Public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Registration logic
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password });
    await user.save();

    // Create JWT Payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };
    // Sign and return the token along with user data
    jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '40h'} , (err , token) => {
        if(err) throw err
        //Send the user and token in response
        res.status(201).json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        })
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});


//Route POST -> /api/users/LOGIN
//Registering authenticate user
//Access -> Public

module.exports = router;
