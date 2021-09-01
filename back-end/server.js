require('dotenv').config({path:'./config/.env'})

const express = require("express")

const app = express()

const PORT = process.env.PORT || 8000

const connectDB = require('./config/connectDB')

app.use(express.json({ limit: '2MB' }))

app.use(require('./routes/product'))

app.listen(PORT, ()=>{
    console.log(`Server is connected on port ${PORT}`)
})

connectDB()