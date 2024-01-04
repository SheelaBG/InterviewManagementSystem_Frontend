import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from './AdminNavbar';
import { useRef, useState } from "react";
import '../Styles/AdminSignup.css';


const AdminSignup = () => {

    let adminName=useRef();
    let adminEmail=useRef();
    let adminPassword=useRef();
    let navigate=useNavigate();

    let[focused,setFocused]=useState(false);

    
    let handleFocus=()=>{
        setFocused(true);
    }
    let handleSubmit=(e)=>{
        e.preventDefault();

        let newAdmin={
            adminName:adminName.current.value,
            adminEmail:adminEmail.current.value,
            adminPassword:adminPassword.current.value
        }

        fetch("http://localhost:9091/admin/signup",
        {
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify(newAdmin)
        })
        .then((res)=>{return res.json();})
        .then((data)=>{
            console.log(data);
            alert("Admin login successfully")
            navigate("/adminLogin")
        })
        .catch((err)=>{ 
          console.log(err);
          alert("error while connecting to database")})

    }

    return ( 
        <div className="admin-signup">
            <AdminNavbar/>
            <div className="admin-form">
                <form onSubmit={handleSubmit}>
                <h1>Admin</h1>
                    <input type="text" placeholder="Enter Name" ref={adminName}  onBlur={handleFocus} pattern="^[A-Za-z0-9]{3,16}$"
                    focused={focused.toString()} required />
                    <span>User name should be 3-16 characters and shouldn't include special characters!</span>
                    <input type="email" placeholder="Enter Email" ref={adminEmail} onBlur={handleFocus}
                    focused={focused.toString()} required />
                    <span>it should be valid email address!</span>
                    <input type="password" placeholder="Enter Password" ref={adminPassword} pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$" onBlur={handleFocus}
                    focused={focused.toString()} required />
                    <span>password should be 8-20 charaters and it includes atleast 1 letter, 1 number and 1 special characters !</span>
                    <div className="admin-signup-btn">
                    <button id="signup" type="submit">Signup</button>
                    </div><br></br>
                    <div>
                    <p>Already a user ?</p><Link to="/adminLogin"> Login</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AdminSignup;