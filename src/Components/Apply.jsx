import { useState } from 'react';
import '../Styles/Apply.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Apply = () => {

    let navigate=useNavigate();
    let[resume,setResume]=useState(null);

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender:'',
      degree: '',
      passoutYear: '',
      percentage: '',
      experience:'',
      email: '',
      mobileNO: '',
    })

    const handleInputChange = (e) => {
      const { name, value, type } = e.target;
  
        setFormData({
          ...formData,
          [name]: value,
        });
    }
  

    //gender
    let handleGenderChange=(e)=>{

      let options = document.getElementsByName("gender");
      console.log(options);
      for (let i = 0; i < options.length; i++) 
      {
          if( options[i].checked )
          {
            setFormData({
              ...formData,
              [e.target.name]: options[i].value,
            });
          }
      }
    }

    //experience
    let handleExpChange=(e)=>{

      let options = document.getElementsByName("experience");
      console.log(options);
      for (let i = 0; i < options.length; i++) 
      {
          if( options[i].checked )
          {
            setFormData({
              ...formData,
              [e.target.name]: options[i].value,
            });
          }
      }
    }

    //resume 

  
    let handleUpload = (e) => {
      e.preventDefault();
      const fileInput = document.getElementById('resume');
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
  
      fetch('http://localhost:9091/api/resume/upload', {
          method: 'POST',
          body: formData
      })
      .then((res) => res.json())
      .then((data) => {
          alert("Uploaded successfully");
          console.log(data);
      })
      .catch((err) => {
          console.error('Error uploading file:', err);
      });
  
  

   }
    

    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log(formData);
      
      fetch('http://localhost:9091/applicant/post', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
        .then((res) => {
          console.log("response ",formData);
            return res.json();
        })
        .then((data) => {
            console.log("file data", data);
            navigate("/")
            alert("file submitted successfully");
            setFormData({
                firstName : '',
                lastName: '',
                dateOfBirth: '',
                gender:'',
                degree: '',
                passoutYear: '',
                percentage: '',
                experience:'',
                email: '',
                mobileNO: '',
              });
        })
        .catch((error) => {
            console.error('Error submitting form:', error);
        });
    };
      

    return ( 
        <div className="apply">
          <Navbar/>
          
            <div className="apply-form">
                <form onSubmit={handleSubmit}>
                    <h1>Apply</h1>

            <label htmlFor="firstName">FirstName:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />

            <label htmlFor="lastName">LastName:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="dateOfBirth">dateOfBirth:</label>
            <input
              type="date"
              id="dob"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              placeholder="dd-mm-yyyy"
              required
            />

            <fieldset>
            <legend>Gender</legend>
            <input type="radio" name="gender" id="m" value="Male" onChange={handleGenderChange}/><label htmlFor="m">Male</label>
            <input type="radio" name="gender" id="f" value="Female" onChange={handleGenderChange}/><label htmlFor="f">Female</label>
            </fieldset>

            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="passout">Passout:</label>
            <input
              type="number"
              id="passout"
              name="passoutYear"
              value={formData.passoutYear}
              onChange={handleInputChange}
              placeholder="Year of Passout"
              required
            />

            <label htmlFor="percentage">Percentage:</label>
            <input
              type="number"
              id="percentage"
              name="percentage"
              value={formData.percentage}
              onChange={handleInputChange}
              required
            />
            <fieldset>
            <legend>Experience</legend>
            <input type="radio" name="experience" id="f" value="Fresher" onChange={handleExpChange}/><label htmlFor="f">Fresher</label>
            <input type="radio" name="experience" id="e" value="Experience" onChange={handleExpChange}/><label htmlFor="e">Experience</label>
            </fieldset>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="mobileNo">Mobile NO:</label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="resume">Upload Resume:</label>
            <input
              type="file"
              id="resume"
              name="Resume"
              accept=".pdf"
              />
             
              <button onClick={handleUpload}>Upload Resume</button>
    

                    <button id="apply-btn" type='submit'>submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default Apply;