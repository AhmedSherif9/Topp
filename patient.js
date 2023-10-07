const express =require('express')
const router =express.Router()
router.get('/',(req,res)=>{
    res.json({mssg:'get doctor'})
})

router.delete('/:id',(req, res) => {
    res.json({mssg:'delete a patient info '})
})
module.exports=router