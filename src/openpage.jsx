import "./openpage.css";
import { useNavigate } from "react-router-dom";

const Openpage = () =>{
    const navigate = useNavigate()

    const changePage = () =>{
        navigate("/hello")
    }

    return(
        <div className="shape-container">
           <button className="custom-shape" onClick={changePage}>
               <span>Register</span>
           </button>
           <button className="custom-shape" onClick={changePage}>
               <span>Log In</span>
           </button>
        </div>
    )
}
export default Openpage