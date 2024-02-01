const express = require("express");
const { authMiddleware, userMiddleware } = require("../../Middleware/user");
const { TodoSchema } = require("./Validate/zodvalidate");
const { Todos, User } = require("../../DataBase/db");
const router = express.Router()


router.post("/newTodo" ,authMiddleware,userMiddleware, async(req ,res)=>{
    const {success} = TodoSchema.safeParse(req.body)
    if (!success){
        return res.status(411).json({
            msg:"Invalid type Entries are there"
        })
    }

    const todo = await Todos.create({
        title:req.body.title,
        description:req.body.description
    })

    await User.updateOne({
        username:req.body.username,
    },{
        "$push":{
            todos: todo._id
        }
    })
    res.json({
        id : todo._id,
        Msg:"Todos updatedSuccessfully"
    })
} )
module.exports = router