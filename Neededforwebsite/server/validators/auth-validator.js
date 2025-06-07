const {z} = require('zod');
const signupSchema=z.object({
    username:z.string({required_error:"Name is required"}).trim().min(3,{message:"minimum 3 character must"}).max(50,{message:"maximum size crossed"}),
    password:z.string({required_error:"password is required"}).trim().min(8,{message:"minimum 8 character must"}).max(20,{message:"password not more than 30"}),
    phone:z.string({required_error:"phone is required"}).trim().min(10,{message:"minimum 10 character must"}).max(12,{message:"maximum size crossed"}),
    email:z.string({required_error:"email is required"}).trim().min(8,{message:"minimum 8 character must"}).max(50,{message:"maximum size crossed"}).email({message:"invalid email address"}),

})
module.exports=signupSchema;