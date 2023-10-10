<<<<<<< Updated upstream:model/doctorvariables.js
const mongoose = require('mongoose')
const Patients = require('./patientvariables')
const Schema = mongoose.Schema
const doctorSchema = new Schema({
    username: {
        type: String,
        required: true
    }
    ,
    name: {
        type: String,
        required: true
    }
    ,
    email: {
        type: String,
        required: true
    }

    ,
    password: {
        type: String,
        required: true
    }
    ,
    date: {
        type: String,
        required: true
    }

    ,
    education: {
        type: String,
        required: true
    }
    ,
    rate: {
        type: Number,
        required: true
    }

   ,
    patients: {
        type: Array,
        required: false
    }

  ,
    affialiation:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    }







})

const doctor= mongoose.model('request', doctorSchema);
module.exports = doctor;
=======
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const doctorSchema = new Schema({
    username: {
        type: String,
        required: true
    }
    ,
    name: {
        type: String,
        required: true
    }
    ,
    email: {
        type: String,
        required: true
    }

    ,
    password: {
        type: String,
        required: true
    }
    ,
    date: {
        type: String,
        required: true
    }

    ,
    education: {
        type: String,
        required: true
    }
    ,
    rate: {
        type: Number,
        required: true
    }

    ,
    hospital: {
        type: String,
        required: true
    }

    ,
    patients: {
        type: Array,
        required: true
    }

    ,

    doctorid: {
        type: String,
        required: true
    }







})
>>>>>>> Stashed changes:doctorvariables.js
