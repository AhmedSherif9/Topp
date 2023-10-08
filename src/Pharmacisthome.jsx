import { useGlobalContext } from "./context"
import Search from "./Search"
import ModalPhar from "./ModalPhar"
import "./web.css"
import MedicinesP from "./MedicinesP"
import AddMediModal from "./addMediModal"
import EddMediModal from "./eddMediModal"

const Pharmacisthome = () => {
    const {showModal,showAddMediModal,showEddMediModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "500px"}}>
        <Search/>
        <MedicinesP/>
        {showModal && <ModalPhar />}
        {showAddMediModal && <AddMediModal />}
        {showEddMediModal && <EddMediModal />}
        </main>
    )
}
export default Pharmacisthome