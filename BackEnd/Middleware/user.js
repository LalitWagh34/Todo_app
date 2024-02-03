const jwt = require("jsonwebtoken")
const JWT_SECRET= require('../config')
const {User} = require('../DataBase/db')

function authMiddleware(req , res ,next){
    const authHeaders = req.headers.authorization;
    try{
        if (!authHeaders || !authHeaders.startsWith('Bearer ')){
            return res.status(403).json({
                msg:"Wrong Inputs I think"
            })
        }
        const token = authHeaders.split(' ')[1];
        const decoded = jwt.verify(token , JWT_SECRET);
        if (decoded.username){
            next();
        }else{
            res.status(403).json({
                msg:"You  are not authorized"
            })
        }
    }
    catch(error){
        console.error(error)
        res.json({
            msg:"Incorrect Inputs"
        })
    }
   
   

}

async function userMiddleware (req ,res ,next){
    const username = req.headers.username
    const userExist = await User.findOne({
        username
    })
    if (!userExist){
        return res.status(403).json({
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