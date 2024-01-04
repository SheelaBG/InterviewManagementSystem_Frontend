import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/AdminForgot.css';
import AdminNavbar from "./AdminNavbar";

const AdminForgot = () => {
    let adminEmail=useRef();
    let adminPassword=useRef();
    let navigate=useNavigate();

    let[focused,setFocused]=useState(false);
    
    let handleFocus =() =>{
        setFocused(true)
    }

    let handleSubmit=(e)=>{
        e.preventDefault();

                fetch("http://localhost:9091/admin/forgot", 

                {
                    method:"PUT",
                    headers : { adminEmail: adminEmail.current.value , adminPassword : adminPassword.current.value }
                
                })
                .then((res)=>{ 
                  
                    return res.json();
                })
                .catch((err)=>{console.log(err);})
                .then((data)=>{console.log(data)
                    
                    if(data)
                    {
                        alert("Reset successfull");
                        navigate("/adminLogin")
                    }
                    else{
                        alert("username or password is wrong");
                        navigate("/adminForgot");
                    }
                }).catch((err)=>{console.log(err);})



        }
    
    return ( <>
            <div className="admin-forgot">
                <AdminNavbar/>
                <div className="admin-forgot-form">
                    <form onSubmit={handleSubmit}>
                    
                        <h2>Reset Password</h2>
                    <input type="email" placeholder="Enter Email" name="email" ref={adminEmail} required  />
                    <input type="password" placeholder="Enter Correct Password" name="password"  ref={adminPassword}  pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$" onBlur={handleFocus}
                        focused={focused.toString()} required />
                     <span>password should be 8-20 charaters and it includes atleast 1 letter, 1 number and 1 special characters !</span>
                    <button type="submit" id="admin-forgot-btn">Reset Password </button>
                    </form>
                </div>
            </div>
    </> );
}
 
export default AdminForgot;