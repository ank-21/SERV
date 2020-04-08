const mongoose = require('mongoose');
const validator = require('validator');

const visitorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    phone:{
        type:String,
        required:true
    },
    msg:{
        type:String
    }
})


const Visitor = mongoose.model('visitor',visitorSchema);
module.exports = Visitor;