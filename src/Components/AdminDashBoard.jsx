import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import '../Styles/AdminDashboard.css';
import { useParams } from "react-router-dom";

const AdminDashboard = () => {

    
    const [allApplicants, setAllApplicants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9091/applicant/getAll")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllApplicants(data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    let {id}=useParams();

    const handleDownload = () => {
        
        fetch("http://localhost:9091/api/resume/getById/"+id)
            .then((res) => {
                if (res.ok) {
                    return res.blob();
                } else {
                    throw new Error(`Failed to download resume. Status: ${res.status}`);
                }
            })
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `resume_${id}.pdf`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch((err) => {
                console.error('Error downloading resume:', err);
            });
    };
    
   
    
    return (
        <div>
            <AdminNavbar />
            <div className="table">
                <h1>Applicants</h1>
                <table border="3px" align="center" bordercolor="#3c4955" cellPadding="8px" cellSpacing="5px">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Degree</th>
                            <th>Passout Year</th>
                            <th>Per %</th>
                            <th>Experience</th>
                            <th>Email Id</th>
                            <th>Mobile No</th>
                            <th>Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allApplicants.map((app, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{app.applid}</td>
                                <td>{app.firstName}</td>
                                <td>{app.lastName}</td>
                                <td>{app.dateOfBirth}</td>
                                <td>{app.gender}</td>
                                <td>{app.degree}</td>
                                <td>{app.passoutYear}</td>
                                <td>{app.percentage}</td>
                                <td>{app.experience}</td>
                                <td>{app.email}</td>
                                <td>{app.mobileNo}</td>
                                {/* Add a link or button to view/download the resume */}
                                <td>
                                <button
                                    onClick={() => handleDownload()}
                                >
                                    Download
                                </button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
