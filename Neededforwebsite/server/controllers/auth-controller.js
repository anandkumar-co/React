import User from "../models/user-model.js";
import bcrypt from "bcryptjs";


const home = async (_req, res) => {
  try {
    res.status(200).send("welcome in Backend");
  } catch (error) {
    console.log(error);
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
    // res.status(200).send({msg:"userCreated"} );
  } catch (error) {
    console.log("register error");
  }
};
const login=async (req,res)=>{
try { 
  const {email,password}=req.body;
  const userExist=await User.findOne({email});
  if(!userExist){
    res.status(400).json({mes:"invalid user or password"});
  }
  const user=await bcrypt.compare(password,userExist.password);
if(user){
  res.status(200).json({
    mess:"login successful",
    userId:userExist._id.toString(),
    token:await userExist.generateToken()});
}
else{
  res.status(401).json({mess:"invalid data"})
}
} catch (error) {
  console.log("invalid user");
}
}
export { home, register, login };
