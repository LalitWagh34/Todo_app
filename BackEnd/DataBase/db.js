const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://lalitWagh:SPM5$s7x$j2sTj6@cluster0.fjhafxi.mongodb.net/Todo_App")


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        minLength:5,
        unique:true,
        trim:true,
        required:true
    },

    password:{
        type:String,
        minLength:6,
        unique:true,
        required:true
    },
    firstName:{
        type:String,
        minLength:6,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        minLength:6,
        required:true,
        trim:true
    }
})

const todoSchema = new mongoose.model({
    title :String,
    description:String,
    completed:{
        type:Boolean,
        Boolean:false
    }
}) 

const User =  mongoose.model("User" , UserSchema)

module.exports={
    User
}