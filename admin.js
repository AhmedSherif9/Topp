const express =require('express')
const router =express.Router()
router.get('/',(req,res)=>{
    res.json({mssg:'get doctor'})
})

router.delete('/:id',(req, res) => {
    res.json({mssg:'delete a patient info '})
})



// const updateUser = async (req, res) => {
//     try {
//        const doctorid = req.params.id; // Assuming you pass the user ID in the URL params
//        const { name, email, age } = req.body;
 
//        // Find the user by ID
//        const user = await userModel.findById(doctorID);
 
//        if (!doctor) {
//           return res.status(404).json({ error: 'User not found' });
//        }
 
//        // Update user properties
//        if (Name) {
//           doctor.name = name;
//        }
//        if (Email) {
//           doctor.email = email;
//        }
//        if (Age) {
//           docotor.age = agege;
//        }
 
       
//        await doctor.save();
 
//        console.log('doctor updated:', doctor);
//        res.status(200).json(doctor);
//     } catch (error) {
//        console.error('Error updating user:', error);
//        res.status(500).json({ error: 'Failed to update user' });
//     }
//  };
//  module.exports=router