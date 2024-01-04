
import { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import Navbar from "./Navbar";

const Home = () => {
    // let[jd,setJd]=useState("");
    // useEffect(()=>{

    //     setTimeout(()=>{
    //         fetch("http://localhost:4001/jd")
    //         .then((res)=>{return res.json()})
    //         .then((data)=>{
    //             console.log(data);
    //             setJd(data)});
    //     },500)

        // setTimeout(()=>{
        //     fetch("http://localhost:9091/jd/post",
        //      {
        //                 method:"POST",
        //                 headers:{"Content-Type":"application/json"},
        //                 body:JSON.stringify(jd)
        //     })
        // .then(()=>{ return res.json();})
        // .then((data)=>{console.log(data);})
        // .catch((err)=>{ 
        //   console.log(err);
        //   alert("error while connecting to database")})

        // },1000)
    // },[])

    return ( <>
    <Navbar/>
    <DashBoard/>
    </> );
}
 
export default Home;