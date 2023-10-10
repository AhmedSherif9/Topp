import { useGlobalContext } from "./context"
import Search from "./Search"
import Medicines from "./Medicines"
import Modal from "./Modal"
import "./web.css"
import FilterModal from "./FilterModal"

const Patienthome = () => {
    const {showModal,showFilterModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "200px"}}>
        <Search/>
        <Medicines/>
        {showModal && <Modal />}
        {showFilterModal && <FilterModal/>}
        </main>
    )
}
export default Patienthome