import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/UserForgotPwd.css";
import Navbar from "./Navbar";

const UserForgotPwd = () => {

    let email=useRef();
    let password=useRef();
    let navigate=useNavigate();

    let[focused,setFocused]=useState(false);
    
    let handleFocus =() =>{
        setFocused(true)
    }

    let handleSubmit=(e)=>{
        e.preventDefault();

                fetch("http://localhost:9091/user/forgot", 

                {
                    method:"PUT",
                    headers : { email: email.current.value , password : password.current.value }
                
                })
                .then((res)=>{ 
                  
                    return res.json();
                })
                .catch((err)=>{console.log(err);})
                .then((data)=>{console.log(data)
                    
                    if(data)
                    {
                        alert("Reset successfull");
                        navigate("/Login")
                    }
                    else{
                        alert("username or password is wrong");
                        navigate("/Forgot");
                    }
                }).catch((err)=>{console.log(err);})



        }
    
    return ( <>
            <div className="user-forgot">
                <Navbar/>
                <div className="User-forgot-form">
                    <form onSubmit={handleSubmit}>
                    
                        <h2>Reset Password</h2>
                    <input type="email" placeholder="Enter Email" name="email" ref={email} required  />
                    <input type="password" placeholder="Enter Correct Password" name="password"  ref={password}  pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$" onBlur={handleFocus}
                        focused={focused.toString()} required />
                     <span>password should be 8-20 charaters and it includes atleast 1 letter, 1 number and 1 special characters !</span>
                    <button type="submit" id="forgot-btn">Reset Password </button>
                    </form>
                </div>
            </div>
    </> );
}
 
export default UserForgotPwd;
