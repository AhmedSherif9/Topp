import "./openpage.css";
import { useNavigate } from "react-router-dom";

const Openpage = () =>{
    const navigate = useNavigate()

    const changePage = () =>{
        navii("/hello")
    }

    return(
        <div class="shape-container">
           <button class="custom-shape" onClick={changePage()}>
               <span>Register</span>
           </button>
           <button class="custom-shape" onClick={changePage()}>
               <span>Log In</span>
           </button>
        </div>
    )
}
export default Openpage