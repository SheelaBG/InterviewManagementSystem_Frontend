import { Link, useNavigate } from "react-router-dom";
import '../Styles/Login.css';
import Navbar from './Navbar';
import { useRef, useState } from "react";


const Login = () => {

    let email=useRef();
    let password=useRef();
    let navigate=useNavigate();
    

    let HandleSubmit=(e)=>{
        e.preventDefault();

                fetch("http://localhost:9091/user/login", 
                { headers : { email: email.current.value , password : password.current.value } })
                .then((response)=>{
                    return response.json(); })
                .catch((error)=>{console.log(error);})
                .then((data)=>{
                        console.log(data);
                            if(data)
                            {
                                localStorage.setItem("userdetails", JSON.stringify(data));
                                alert("login successfully"); 
                                navigate("/home")  
                            }
                            else{
                                alert("username or password is wrong !")   
                                navigate("/login") 
                            }
                           
                            
                        })
                .catch((err)=>{console.log(err);})
        }
    
            
    return (
            <div className="login">
                <Navbar/>
                <div className="login-form">
                <form onSubmit={HandleSubmit}>
                <h1>Login</h1>
                <label >Email  </label><input type="email" placeholder="Email"  ref={email} required />
                <label >Password  </label><input type="password" placeholder="Password" ref={password} required />
                <input type="submit" id="login-btn" value="Login" />
                <Link to="/Forgot" style={{fontSize:"12px" ,color:"red" ,marginBottom:"5px" ,fontWeight:"bold" }}>Forgot Password ?</Link>
                <div>
                    <p>Not a Member ? </p><Link to="/">Signup</Link>  
                </div>  
                           
                </form>
                </div>
            </div>     
    );
}
 
export default Login;