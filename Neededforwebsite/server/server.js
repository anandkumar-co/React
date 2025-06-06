// app.get("/",(req,res)=>{
    //     res.status(200).send("welcome in Backend");
    // });
const express=require("express");
const app=express();
app.use(express.json());
const router=require("./router/auth-router");
const connecDb = require("./utils/db");
app.use("/api/auth",router)
const PORT=5000;
connecDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING at ${PORT}`);
})
})

