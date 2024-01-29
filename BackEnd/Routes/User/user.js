const express = require('express')
const router  = express.Router()
const {User} = require('../../DataBase/db')
const {jwt} = require('jsonwebtoken')
const JWT_SECRET = require('../../config')
const zod = require('zod')
const {signupBody} = require('./validate/zodValidation')


router.post("/signup" , async(req , res)=>{
  const {success} = signupBody.safeParse(req.body);
  if (!success){
    return res.status(409).json({
        msg:"Email or Password is wrong"
    })
  }
   const userExists = await User.findOne({
    username : req.body.username
   })
   if (userExists){
    return res.status(409).json({
        msg:"No Need To sign! User already exists"
    })
   }
    await User.create({
    username:req.body.username,
    password:req.body.password,
    firstName:req.body.firstName,
    lastName:req.body.lastName
   })
//    if(user){
//     const token = jwt.sign({
//         userId:user._id
//     })
//    }
    res.json({
        msg:"User created Successfully"
    })
})




module.exports = router