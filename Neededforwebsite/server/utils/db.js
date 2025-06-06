const mongoose=require("mongoose")
// const URI= "mongodb://127.0.0.1:27017/All_component";
const URI=process.env.MONGODB_URI;

const connecDb=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection settled");
        
    } catch (error) {
        console.log("database connection failed");
        process.exit(0); 
    }
}
module.exports=connecDb;