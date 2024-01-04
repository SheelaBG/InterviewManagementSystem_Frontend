import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/AdminLogin.css';
import AdminNavbar from "./AdminNavbar";


const AdminLogin = () => {
    let adminEmail=useRef();
    let adminPassword=useRef();
    let navigate=useNavigate();

    let HandleSubmit=(e)=>{
        e.preventDefault();

                fetch("http://localhost:9091/admin/login", 
                { headers : { adminEmail: adminEmail.current.value , adminPassword : adminPassword.current.value } })
                .then((response)=>{
                    return response.json(); })
                .catch((error)=>{console.log(error);})
                .then((data)=>{
                        console.log(data);
                            if(data)
                            {
                                localStorage.setItem("admindetails", JSON.stringify(data));
                                alert("login successfully"); 
                                navigate("/adminDashboard")  
                            }
                            else{
                                alert("username or password is wrong !")   
                                navigate("/adminLogin") 
                            }
                           
                            
                        })
                .catch((err)=>{console.log(err);})
        }
    
            
    return (
            <div className="admin-login">
                <AdminNavbar/>
                <div className="admin-login-form">
                <form onSubmit={HandleSubmit}>
                <h1>Login</h1>
                <input type="email" placeholder="Enter Email"  ref={adminEmail} required />
                <input type="password" placeholder=" Enter Password" ref={adminPassword} required />
                <input type="submit" id="admin-login-btn" value="Login" />
                <Link to="/adminForgot" style={{fontSize:"12px" ,color:"red" ,marginBottom:"5px" ,fontWeight:"bold" }}>Forgot Password ?</Link>
                <div>
                    <p>Not a Member ? </p><Link to="/">Signup</Link>  
                </div>  
                           
                </form>
                </div>
            </div>     
    );

}
 
export default AdminLogin;