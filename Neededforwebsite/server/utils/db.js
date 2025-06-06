const mongoose=require("mongoose")
// const URI= "mongodb://127.0.0.1:27017/All_component";
const URI="mongodb+srv://anandpandey62099:Anand95233@cluster0.56eb5xc.mongodb.net/All_component?retryWrites=true&w=majority&appName=Cluster0";

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