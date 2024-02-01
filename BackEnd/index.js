const express = require("express");
const cors = require('cors')
const app = express()
const router = express.Router()
app.use(cors());
app.use(express.json())
const mainRouter = require('./Routes/User/user')
const mainAccount = require("./Routes/Todos/Todos")

app.use("/api" , mainRouter);
app.use("/account" ,mainAccount);

app.listen(3000)

module.exports = router;