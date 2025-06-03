
const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.status(200).send("welcome in Backend using router");
});
module.exports=router;
