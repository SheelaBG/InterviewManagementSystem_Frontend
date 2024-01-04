import {Link, Navigate, json, useNavigate} from 'react-router-dom';
import '../Styles/Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {

    let navigate=useNavigate();
   let[userProfile,setUserProfile]= useState(null);
   let[visible,setVisible]= useState(false);

    useEffect(()=>{
            let user=localStorage.getItem("userdetails");
            user=JSON.parse(user);
            setUserProfile(user);
    },[])

    //logout
    let handleLogout=()=>{
        localStorage.removeItem("userdetails");
        navigate("/");
    }
    //delete Account
    let handleDelete=()=>{

        localStorage.removeItem("userdetails");

        console.log(userProfile.email);
        
        fetch("http://localhost:9091/user/delete", 
                { 
                    method:"DELETE",
                    headers : { email: userProfile.email } })
                .then((response)=>{return response.json(); })
                .catch((error)=>{console.log(error);})
                .then((data)=>{
                       alert("Account deleted Sucessfully");
                       navigate("/")
                        console.log(data);})
                .catch((err)=>{console.log(err);})


    }

    return ( 
        <nav id="nav">
        <div>
        <Link to="/home" className="logo">Interview Management System </Link>
  
        </div>

        <div id="rightnav">
            <div >
                <Link to="/" className="nav-link">SignUp</Link>
                <Link to="/adminSignup" className="nav-link">Admin</Link>
                {userProfile && <a className="nav-link-profile" onClick={()=>{setVisible(!visible)}}>Profile</a>}
                
            </div>
        </div>
        
        { visible && <div className='profile'>
                    <h1>{userProfile.username}</h1>
                    <div>
                    <button id='logout' onClick={handleLogout}>Logout</button>
                    <button id='delete' onClick={handleDelete}>Delete Account</button>
                    </div>
                </div>}
        </nav>
     );
}
 
export default Navbar;