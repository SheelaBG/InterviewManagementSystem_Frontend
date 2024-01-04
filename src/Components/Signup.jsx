import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Signup.css';
import FormInput from "./FormInput";
import Navbar from './Navbar';
import ToasterUi from 'toaster-ui';//import 1

const Signup = () => {

    let navigate=useNavigate();
    const toaster = new ToasterUi();

    const[value,setValue]=useState(
        {
          username:"",
          email:"",
          mobileNo:"",
          password:"",
        }
      );
      const inputs=[
        {
          id:1,
          label:"Username",
          placeholder:"username",
          name:"username",
          type:"text",
          errorMessage:"User name should be 3-16 characters and shouldn't include special characters!",
          required:true,
          pattern:"^[A-Za-z0-9]{3,16}$"
        },
        
        {
          id:2,
          label:"Email",
          placeholder:"email",
          name:"email",
          type:"email",
          errorMessage:"it should be valid email address!",
          required:true
        },
        {
            id:3,
            label:"Mobile No",
            placeholder:"Mobile No",
            name:"mobileNo",
            type:"tel",
            errorMessage:"Enter Valid Number, it should be 10 digits!",
            maxLength:10,
            minLength:10,
            required:true,  
        },
        {
          id:4,
          label:"Password",
          placeholder:"password",
          name:"password",
          type:"password",
          errorMessage:"password should be 8-20 charaters and it includes atleast 1 letter, 1 number and 1 special characters !",
          required:true,
          pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
        }
      ]

      const onChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
      }

      //---> 6 handle submit
      const handleSubmit=(e)=>
      {
        e.preventDefault();
        console.log(value);

        fetch("http://localhost:9091/user/signup",
        {
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify(value)
        })
        .then(()=>{
         alert("user signed successfully");
            navigate("/Login")
        }).catch((err)=>{ 
          console.log(err);
          alert("error while connecting to database")})
       
      }

    return ( 
        <div className="Section">
          <Navbar/>
            <div className="form">
                <form onSubmit={handleSubmit}>
                <h1>Signup</h1>
                {inputs.map((input)=>(
                     <FormInput {...input} key={input.id} value={value[input.name]} onChange={onChange} />

                    ))}
                    <div className="signup-btn">
                    <button id="signup">Signup</button>
                    <Link to="/adminSignup"><button id="admin">Admin</button></Link>
                    </div>
                    <p>Already a user ? </p><Link to="/Login"> Login</Link>
                </form>
            </div>
        </div>
     );
}
 
export default Signup;