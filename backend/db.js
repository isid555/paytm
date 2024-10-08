const express = require('express')
const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017");
mongoose.connect("mongodb+srv://r555sid:baahubali@cluster0.ngdtb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


// const UserSchema  = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         lowercase: true,
//         minLength: 3,
//         maxLength: 30
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 6
//     },
//     firstName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     }
// })





const userSchema  = mongoose.Schema({
    // userName : String,
    // password : String,
    // firstName : String,
    // lastName : String
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});



const User  = mongoose.model('User',userSchema);



const accountSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const Account = mongoose.model('Account',accountSchema);
module.exports = {
    User,
    Account
}

