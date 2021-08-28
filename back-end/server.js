require('dotenv').config({path:'./config/.env'})

const express = require("express")

const app = express()

const PORT = process.env.PORT || 8000

const connectDB = require('./config/connectDB')

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(express.json({ limit: '2MB' }))

app.use(require('./routes/product'))

app.listen(PORT, ()=>{
    console.log(`Server is connected on port ${PORT}`)
})

connectDB()