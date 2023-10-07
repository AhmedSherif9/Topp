const express= require('express')
const mongoose=require('mongoose')
require ('dotenv').config()

const patientRoutes=require('./routes/patient')
const doctorsRoutes=require('./routes/doctors')
const app = express()
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.get('/',(req,res)=>{
    res.json({Mssg:'Sign up'})
})
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(process.env.PORT,()=>{
        console.log('listening to db ',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})
