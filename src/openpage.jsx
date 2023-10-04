import "./openpage.css";
import { useNavigate } from "react-router-dom";

const Openpage = () =>{
    const navigate = useNavigate()

    const changePage = () =>{
        navigate("/reg")
    }

    return(
        <div className="shape-container">
           <button className="custom-shape" onClick={changePage}>
               <span>Register</span>
           </button>
           <h3 style={{color : "white"}}>or</h3>
           <button className="custom-shape">
               <span>Log In</span>
           </button>
        </div>
    )
}
export default Openpage