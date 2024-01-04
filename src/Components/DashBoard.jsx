
import { Link } from "react-router-dom";
import '../Styles/Dashboard.css';

const DashBoard = () => {

    return ( <div className="dashBoard">
        <div className="container">
            <h1 className="subTitle">Career</h1>
            <div className="jobs-list">
                <div>
                    <h2 >Web Developer</h2>
                    <p>A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript and Frameworks (like React js and other...) in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server..</p>
                    <Link to='./FullStack/1'>Apply</Link> 
                </div>    
                <div>
                    <h2>Java Full Stack Developer</h2>
                    <p>A full-stack Java developer is responsible for programming back-end code and software systems and designing the front-end areas of software or websites in the Java coding language. Full-stack Java developers often lead teams that work on software, websites, or applications.</p>
                    <Link to='./FullStack/2'>Apply</Link> 
                </div>
                <div>
                    <h2>Mern Stack Developer</h2>
                    <p>MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.</p>
                    <Link to='./FullStack/3'>Apply</Link> 
                </div> 
            </div>
        </div>
    </div> );
}
 
export default DashBoard;