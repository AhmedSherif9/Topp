import { useGlobalContext } from "./context"
import Search from "./Search"
import Medicines from "./Medicines"
import Modal from "./Modal"
import NavAdmin from "./NavAdmin"
import "./web.css"

const Adminhome = () => {
    const {showModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "500px"}}>
        <NavAdmin/>
        <Search/>
        <Medicines/>
        {showModal && <Modal />}
        </main>
    )
}
export default Adminhome