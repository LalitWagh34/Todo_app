const jwt = require("jsonwebtoken")
const JWT_SECRET = require('../config')
const {User} = require('../DataBase/db')

function authMiddleware(req , res ,next){
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith('Bearer ')){
        return res.status(403).json({
            msg:"Wrong Inputs I think"
        })
    }
    const token = authHeaders.split('')[1];
    try{
        const decoded = jwt.verify(token , JWT_SECRET) 
        req.userId = decoded.userId
    }
    catch(error){
        return res.status(403).json({
            msg:"Something went Wrong"
        })
    }
   

}

async function userMiddleware (req ,res ,next){
    const username = req.username
    const userExist = await User.findOne({
        username
    })
    if (!userExist){
        return res.json({
            msg:"Create a New Account to Continue"
        })
    }
    req.user = userExist 
    next()
}

module.exports = {
    authMiddleware,
    userMiddleware
}