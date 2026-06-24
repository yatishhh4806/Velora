const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const dns = require('dns')

dns.setServers(['1.1.1.1', '8.8.8.8'])
const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()
const PORT = process.env.PORT || 3000
//Connecting to the MongoDb database
connectDB()
app.get('/', (req,res)=>{
    res.send('Welcome')
})

//API Routes
app.use('/api/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is Running ON http://localhost:${PORT}`)
})