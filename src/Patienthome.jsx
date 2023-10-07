import { useGlobalContext } from "./context"
import Search from "./Search"
import Medicines from "./Medicines"
import Modal from "./Modal"
import "./web.css"

const Patienthome = () => {
    const {showModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "500px"}}>
        <Search/>
        <Medicines/>
        {showModal && <Modal />}
        </main>
    )
}
export default Patienthome