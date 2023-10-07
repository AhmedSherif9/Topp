const express =require('express')
const router =express.Router()
router.get('/',(req,res)=>{
    res.json({mssg:'get doctor information '})
})
 
router.get('/:id',(req, res) => {
    res.json({mssg:'Get a single doctor info '})
})
router.delete('/:id',(req, res) => {
    res.json({mssg:'delete a package info '})
})
router.post('/:id',(req, res) => {
    res.json({mssg:'Post a new package info '})
})
router.post('/:id',(req, res) => {
    res.json({mssg:'Post a new admin info '})
})
router.patch('/:id',(req,res)=>
{
    res.json({mssg:'update a package info '})
})
router.delete('/:id',(req, res) => {
    res.json({mssg:'delete a admin info '})
})
router.delete('/:id',(req, res) => {
    res.json({mssg:'delete a doctor info '})
})
router.delete('/:id',(req, res) => {
    res.json({mssg:'delete a patient info '})
})

module.exports=router