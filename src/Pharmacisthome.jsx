import { useGlobalContext } from "./context"
import Search from "./Search"
import ModalPhar from "./ModalPhar"
import "./web.css"
import MedicinesP from "./MedicinesP"

const Pharmacisthome = () => {
    const {showModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "500px"}}>
        <Search/>
        <MedicinesP/>
        {showModal && <ModalPhar />}
        </main>
    )
}
export default Pharmacisthome