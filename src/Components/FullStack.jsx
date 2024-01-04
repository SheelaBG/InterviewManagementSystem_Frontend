import { useEffect, useState } from "react";
import '../Styles/FullStack.css';
import { Link, useParams } from "react-router-dom";
import Navbar from './Navbar';

const FullStack = () => {
 
    let {id}=useParams();
    let[jd,setjd]=useState("");

    useEffect(()=>{

       setTimeout(()=>{

        fetch(`http://localhost:9091/jd/getById/${id}`)
        .then((res)=>{ return res.json();})
        .then((data)=>{ console.log(data);
            setjd(data);
        })
                   
        .catch((err)=>{
            console.log(err);
            alert("error while connecting to database")}
            
        )},500 ) 

    },[]);

    return ( 
        <div className="section">
            <Navbar/>
       { jd && <div className="jd-container">
            <h1>{jd.role}</h1>
            <p>{jd.jobBrief}</p>
            <h3 style={{display:"inline"}}>Experience : </h3><p style={{display:"inline"}}>{jd.exp}</p><br/><br/>
            <h3 style={{display:"inline"}}>Skills : </h3><p style={{display:"inline"}}>{jd.skills}</p>
            <div className="btn">
             <Link target="_blank" to="https://img1.wsimg.com/blobby/go/e2a365f6-3ee8-45e5-8c2b-461d3909aba6/downloads/Java%20full%20Stack%20Developer.pdf?ver=1700106786864"><button type="download" >Download JD</button></Link>   
             <Link to="./Apply"><button type="apply">Apply</button></Link>
            </div>
        </div>}
        </div>
     );
}
 
export default FullStack;