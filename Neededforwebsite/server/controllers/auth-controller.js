const User = require("../models/user-model");
const bcrypt=require("bcrypt");


const home = async (req, res) => {
  try {
    res.status(200).send("welcome in Backend");
  } catch (error) {
    console.log(console.error());
  }
};


const register = async (req, res) => {
  try {
    // console.log(req.body);

    const { username, email, phone, password } = req.body;

    const userExist =await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "already exist" });
    }

    const saltRound=10;
    const hash_password=await bcrypt.hash(password,saltRound);

    const userCreated=await User.create({ username, email, phone, password:hash_password });
    res.status(200).json({msg:"registration successfull", token:await userCreated.generateToken(), userId:userCreated._id.toString()} );
    // res.status(200).send({msg:userCreated} );
  } catch (error) {
    console.log(console.error());
  }
};
module.exports = { home, register };
