// app.get("/",(req,res)=>{
    //     res.status(200).send("welcome in Backend");
    // });
require('dotenv').config();
const express=require("express");
const cors=require("cors");
const app=express();
// app.use(cors);
app.use(express.json());
const router=require("./router/auth-router");
const connecDb = require("./utils/db");

const corsOptions={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,DELETE",
    credential:true,
}
app.use(cors(corsOptions))
app.use("/api/auth",router)
const PORT=5000;
connecDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING at ${PORT}`);
})
})

