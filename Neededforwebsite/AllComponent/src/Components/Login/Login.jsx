import { useState } from "react";
import "./Login.css";
function Login() {
    // const[email, setEmail]=useState("");
    // const[password, setPassword]=useState("");
    const[userData, setUserData]=useState({
        email:"",
        password:""
    });
    async function handleSubmit(e){
        e.preventDefault();
      const submitData  = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(userData)
      })
      console.log(submitData)
    }
    function handleLogin(e){
        const{name,value}=e.target;
        setUserData((prev)=>({...prev,[name]:value}));
    }
  return (

      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <span className="login-label" >
                Email:
            </span >
                <input type="email" id="Email" name="email" required value={userData.email} onChange={handleLogin} autoComplete="off"/>
           <span className="login-label">
                Password:
           </span >
                <input type="Password" id="Password" name="password" value={userData.password} onChange={handleLogin} required autoComplete="off" />
            <button type="submit" className="login-button">Login</button>
        </form>
    </div>
  );
}
export default Login;