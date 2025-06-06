import { useState } from "react";
import "./Signup.css";
function Signup(){
    const[userData,setUserData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        Contact:"",
        password:""

    })
    function handleLogin(e){
        const{name,value}=e.target;
        setUserData((prevData)=>({
            ...prevData,[name]:value
        }))
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:5000/api/auth/register",{
            method:"POST",
            headers:{
            "Content-Type":"json/application",
            },
            body:JSON.stringify(userData),
        }
        ).then(res=>res.json).then(data=>console.log(data)).catch(error=>console.log(error))
        console.log(userData);
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
                <input className="signup-input" type="text" id="Contact" name="Contact" required value={userData.Contact} onChange={handleLogin}/>
             <span className="signup-login-label" >
                Contact:
            </span >
            </div>
            <div className="input-container">
                <input className="signup-input" type="email" id="Email" name="email" required value={userData.email} onChange={handleLogin}/>
                <span className="signup-login-label" >
                Email:
                </span >
            </div>
            <div className="input-container">
               <input className="signup-input" type="Password" id="Password" name="password" value={userData.password} onChange={handleLogin} required />
               <span className="signup-login-label">
                Password:
               </span >
            </div>
            <button type="submit" className="login-button">Login</button>
        </form>
    </div>
    
    
)
}
export default Signup;