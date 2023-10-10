const express= require('express')
const mongoose=require('mongoose')
const {createpatient, addmember, viewfamily}= require('./routes/patient')
const { createdoctor, updatedoc } = require('./routes/doctors')
const { deleteuser, docreqs, createadmin } = require('./routes/admin')
require ('dotenv').config()
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors())
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


app.post("/createpatient",createpatient)
app.post("/createdoctor",createdoctor)
app.post("/createadmin",createadmin)
app.put("/docedit",updatedoc)
app.post("/addmember",addmember)
app.get("/family",viewfamily)



































app.delete("/deleteruser",deleteuser)
app.get("/viewdoctors",docreqs)