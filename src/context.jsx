import React, {useContext, useState} from 'react'
// import axios from 'axios'

const AppContext = React.createContext()

// const allMedicinesUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const AppProvider = ({children}) => {
    // const [loading, setLoading] = useState(false)
    const getMedicines = () =>{
        const meds = [
            {
            name:"medicine A",
            price: 200,
            description: "description",
            quantity: 280,
            sales: 50,
            picture:"https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max"
            },
            {
            name:"medicine B",
            price: 200,
            description: "description",
            quantity: 280,
            sales: 50,
            picture:"https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max"
            },
            {
            name:"medicine C",
            price: 200,
            description: "description",
            quantity: 280,
            sales: 50,
            picture:"https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max"
            },
            {
            name:"medicine D",
            price: 200,
            description: "description",
            quantity: 280,
            sales: 50,
            picture:"https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max"
            },
            {
            name:"medicine E",
            price: 200,
            description: "description",
            quantity: 280,
            sales: 50,
            picture:"https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max"
            },
            {
            name:"medicine F",
            price: 200,
            description: "description",
            quantity: 280,
            sales: 50,
            picture:"https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max"
            },
            {
            name:"medicine G",
            price: 200,
            description: "description",
            quantity: 280,
            sales: 50,
            picture:"https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max"
            }
        ]
        return meds;
    }
    const [medicines] = useState(getMedicines())
    // const [searchTerm,setSearchTerm] = useState("a")
    // const [showModal,setShowModal] = useState(false)
    // const [selectedMedicine,setSelectedMedicine] = useState(null)
    
    
    // const fetchMedicines = async (url) => {
    //     setLoading(true)
    //     try{
    //     const {data} = await axios(url)
    //     if(data.medicines){
    //         setMedicines(data.medicines)
    //     }
    //     else{
    //         setMedicines([])
    //     }
    //     }
    //     catch(error){
    //         console.log(error.response)
    //     }
    //     setLoading(false)
    // }

    // const selectMeal = (idMeal) => {
    //     let medicine;
    //     medicine = medicines.find((meal) => meal.idMeal === idMeal)
    //     setSelectedMedicine(medicine)
    //     setShowModal(true)
    // }

    // const closeModal = ()=>{
    //     setShowModal(false)
    // }

    // useEffect(()=> {
    //     if(searchTerm){
    //         fetchMedicines(`${allMealsUrl}${searchTerm}`);
    //     }
    // }
    // ,[searchTerm])
    // :>>>
    
    return (
        <AppContext.Provider value={{medicines}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}