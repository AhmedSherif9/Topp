const mongoose = require('mongoose')
const Schema = mongoose.Schema
const patientSchema = new Schema({
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
    birth_date: {
        type: String,
        required: true
    }

    ,
    gender: {
        type: String,
        required: true
    }
    ,
    mobile_no: {
        type: Number,
        required: true
    }

    ,
    emg_no: {
        type: Number,
        required: true
    }

    ,
    emg_name: {
        type: String,
        required: true
    }

    ,

    mem_name: {
        type: String,
        required: true
    }
    ,
    mem_id: {
        type: Number,
        required: true
    }
    ,
    mem_age: {
        type: Number,
        required: true
    }
    ,
    mem_gender: {
        type: String,
        required: true
    }

    ,
    mem_relation: {
        type: String,
        required: true
    }
    ,
    patientID: {
        type: Number,
        required: true
    }







})