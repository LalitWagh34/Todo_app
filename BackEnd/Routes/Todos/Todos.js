const express = require("express");
const { authMiddleware, userMiddleware } = require("../../Middleware/user");
const { TodoSchema, UpdateSchema } = require("./Validate/zodvalidate");
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
        todo : todo ,
        id : todo._id,
        Msg:"Todos Added  Successfully"
    })
})

router.get("/myTodo" , authMiddleware , userMiddleware, ( req ,res) =>{
    const userId = req.userId ;
    Todos.find({ userId })
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to retrieve todos' });
    });
    
})

router.put("/updateTodo/:todoId" , authMiddleware ,userMiddleware , async(req , res) =>{
    const todoId = req.params.todoId;
    const todoExist = await Todos.find({
        _id:todoId
    })
    if(!todoExist){
        res.status(403).json({
            msg:"Todo Does not Exists"
        })
    }
    const success = UpdateSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg:"Invalid type Entries are there"
        })
    }

    const updateTodos = {
        $set:{
        }  
    }
    if (req.body.tag !== undefined) {
        updateTodos.$set.tag = req.body.tag;
    }
    if (req.body.title !== undefined) {
        updateTodos.$set.title = req.body.title;
    }
    if (req.body.description !== undefined) {
        updateTodos.$set.description = req.body.description;
    }
    if (req.body.completed !== undefined) {
        updateTodos.$set.completed = req.body.completed;
    }
    
    var updatedTodo = await Todos.updateOne(
        { _id: todoId },
        updateTodos
    )
    res.json({
        msg:"Upadated Successfully",
        updatedTodo
    })

})

router.delete("/deleteTodo/:todoId" , authMiddleware , userMiddleware ,async(req,res)=>{
    const todoId = req.params.todoId;
  
        const todoExists = await Todos.findOne({
            _id : todoId
        })
        if (!todoExists){
            return res.json({
                msg:"Nothing to delete,this Todo does not exist"
            })
        }
        await Todos.deleteOne({
           _id : todoId
        })
    
        await User.updateOne(
            {username : req.username},
            {
                "$pull":{
                    Todos : todoId
                }
            }
        )
        res.json({ 
            msg: "Todo deleted" 
        })
 
    
})
module.exports = router