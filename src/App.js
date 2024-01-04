
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import FullStack from './Components/FullStack';
import Signup from './Components/Signup';
import Apply from './Components/Apply';
import Login from './Components/Login';
import Protect from './Components/Protect';
import FNF from './Components/FNF';
import UserForgotPwd from './Components/UserForgotPwd';
import AdminSignup from './Components/AdminSignup';
import AdminLogin from './Components/AdminLogin';
import AdminDashboard from './Components/AdminDashBoard';
import AdminForgot from './Components/AdminForgot';

function App() {
  return (
   
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/adminSignup" element={<AdminSignup/>}></Route>
        <Route path="/adminLogin" element={<AdminLogin/>}></Route>
        <Route path="/adminForgot" element={<AdminForgot/>}></Route>
        <Route path="/adminDashboard" element={<AdminDashboard/>}></Route>
        <Route path="/Forgot" element={ <Protect Child={UserForgotPwd}/> }></Route>
        <Route path="/home" element={ <Protect Child={Home}/> }></Route>
        <Route path="/home/FullStack/:id" element={ <Protect Child={FullStack}/> }></Route>
        <Route path="/home/FullStack/:id/Apply" element={ <Protect Child={Apply}/> }></Route>
        <Route path="/home/Webdeveloper" element={ <Protect Child={FNF}/> }></Route>
        <Route path="/home/MERN" element={ <Protect Child={FNF}/> }></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
