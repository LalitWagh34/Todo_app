const express = require("express");
const cors = require('cors')
const app = express()
const router = express.Router()
app.use(cors());
app.use(express.json())
const mainRouter = require('./Routes/User/user')

app.use("/api" , mainRouter);

app.listen(3000)

module.exports = router;