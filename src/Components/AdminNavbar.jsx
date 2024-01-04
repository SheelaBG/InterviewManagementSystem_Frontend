import {Link, json, useNavigate} from 'react-router-dom';
import '../Styles/AdminNavbar.css';
import { useEffect, useState } from 'react';

const AdminNavbar = () => {
    let navigate=useNavigate();
    let[adminProfile,setAdminProfile]= useState(null);
    let[visible,setVisible]= useState(false);
 
     useEffect(()=>{
             let admin=localStorage.getItem("admindetails");
             admin=JSON.parse(admin);
             setAdminProfile(admin);
     },[])
 
     //logout
     let handleLogout=()=>{
         localStorage.removeItem("admindetails");
         navigate("/adminSignup");
     }


     //delete account
        let handleDelete=()=>{
            localStorage.removeItem("admindetails");

            console.log(adminProfile.adminEmail);
            
            fetch("http://localhost:9091/admin/delete", 
                    { 
                        method:"DELETE",
                        headers : { adminEmail: adminProfile.adminEmail } })
                    .then((response)=>{return response.json(); })
                    .catch((error)=>{console.log(error);})
                    .then((data)=>{
                           alert("Account deleted Sucessfully");
                           navigate("/adminSignup")
                            console.log(data);})
                    .catch((err)=>{console.log(err);})
    
        }


    return ( 
        <nav id="admin-nav">
        <div>
       { adminProfile ? <Link to="/adminDashboard" className="logo">Interview Management System </Link> :
       <Link to="/adminSignup" className="logo">Interview Management System </Link> }
       
        </div>

        <div id="rightnav">
            <div >
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/adminSignup" className="nav-link">SignUp</Link>
               { adminProfile && <a className="nav-link-profile" onClick={()=>{setVisible(!visible)}}>Profile</a>}
                
            </div>
        </div>
        
        { visible && <div className='profile'>
                    <h1>{adminProfile.adminName}</h1>
                    <div>
                    <button id='logout' onClick={handleLogout}>Logout</button>
                    <button id='delete' onClick={handleDelete}>Delete Account</button>
                    </div>
                </div>}
        </nav>
     );
}
 
export default AdminNavbar;