import { useState } from "react";
import "./Signup.css";
function Signup(){
    const[userData,setUserData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        password:"",
    })
    function handleLogin(e){
        const{name,value}=e.target;
        setUserData((prevData)=>({
            ...prevData,[name]:value
        }))
    }
   async function handleSubmit(e){
        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/auth/register",{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            },
            body:JSON.stringify({
                username:userData.firstname+userData.lastname,
                email:userData.email,
                phone:userData.phone,
                password:userData.password
            }),
        }
    );
    console.log(response);
    }

return(

    <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input className="signup-input" type="text" id="firstname" name="firstname" required value={userData.firstname} onChange={handleLogin} />
             <span className="signup-login-label" >
                First Name:
            </span >
            </div>
            <div className="input-container">
                <input className="signup-input" type="text" id="lastname" name="lastname" required value={userData.lastname} onChange={handleLogin}/>
             <span className="signup-login-label" >
                Last Name:
            </span >
            </div>
            <div className="input-container">
                <input className="signup-input" type="text" id="phone" name="phone" required value={userData.phone} onChange={handleLogin}/>
             <span className="signup-login-label" >
                Contact:
            </span >
            </div>
            <div className="input-container">
                <input className="signup-input" type="text" id="email" name="email" required value={userData.email} onChange={handleLogin}/>
               
                <span className="signup-login-label" >
                Email:
                </span >
            </div>
            <div className="input-container">
               <input className="signup-input" type="text" id="password" name="password" value={userData.password} onChange={handleLogin} required />
               <span className="signup-login-label">
                Password:
               </span >
            </div>
            <button type="submit" className="login-button">Sign up</button>
        </form>
    </div>
    
    
)
}
export default Signup;