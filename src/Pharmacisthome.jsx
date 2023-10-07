import { useGlobalContext } from "./context"
import Search from "./Search"
import Medicines from "./Medicines"
import ModalPhar from "./ModalPhar"
import "./web.css"

const Pharmacisthome = () => {
    const {showModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "500px"}}>
        <Search/>
        <Medicines/>
        {showModal && <ModalPhar />}
        </main>
    )
}
export default Pharmacisthome