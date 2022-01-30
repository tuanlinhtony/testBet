const mongoose = require('mongoose')
const  validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(email){
            if(!validator.isEmail(email)){
               throw new Error('Email is invalid') 
            }
        },
        lowercase: true,
        trim: true
    },
    age : {
        type : Number,
        default: 0,
        required: true,
        validate(value) {
            if(value <= 0){
                throw new Error('Age must be a postive number')
            }
        }
    },
    balance: {
        type : Number,
        default: 0
    }
},
{
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User
