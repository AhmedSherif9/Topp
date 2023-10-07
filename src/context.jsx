import React, {useContext, useState} from 'react'
// import axios from 'axios'

const AppContext = React.createContext()

// const allMedicinesUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const AppProvider = ({children}) => {
    // const [loading, setLoading] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const [selectedMedicine,setSelectedMedicine] = useState(null)

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
    const getPharmacists = () =>{
        const phars = [
            {
            name:"Ahmed",
            id: 1,
            age: 20,
            education: "harvard"
            },
            {
            name:"Mohamed",
            id: 2,
            age: 20,
            education: "harvard"
            },
            {
            name:"Ali",
            id: 3,
            age: 20,
            education: "harvard"
            },
            {
            name:"zeyad",
            id: 4,
            age: 20,
            education: "harvard"
            }
        ]
        return phars;
    }
    const getPatients = () =>{
        const patients = [
            {
            name:"kiro",
            id: 1,
            age: 20,
            reason: "headache"
            },
            {
            name:"hassabo",
            id: 2,
            age: 20,
            reason: "headache"
            },
            {
            name:"Ali",
            id: 3,
            age: 20,
            reason: "headache"
            },
            {
            name:"zeyad",
            id: 4,
            age: 20,
            reason: "headache"
            }
        ]
        return patients;
    }
    const [medicines] = useState(getMedicines())
    const [pharmacists, setPharmacists] = useState(getPharmacists)
    const [patients, setPatients] = useState(getPatients())
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

    const selectMedicine = (name) => {
        let medicine;
        medicine = medicines.find((medicine) =>
        medicine.name === name
        )
        
        setSelectedMedicine(medicine)
        setShowModal(true)
    }

    const closeModal = ()=>{
        setShowModal(false)
    }

    const removePharmacist = (id)=>{
        let arr = pharmacists.filter((pharmacist)=>pharmacist.id !== id)
        setPharmacists(arr)
    }

    const removePatient = (id)=>{
        let arr = patients.filter((patient)=>patient.id !== id)
        setPatients(arr)
    }

    // useEffect(()=> {
    //     if(searchTerm){
    //         fetchMedicines(`${allMealsUrl}${searchTerm}`);
    //     }
    // }
    // ,[searchTerm])
    // :>>>
    
    return (
        <AppContext.Provider value={{medicines,selectedMedicine,selectMedicine,closeModal,showModal,patients,pharmacists,removePharmacist,removePatient}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}