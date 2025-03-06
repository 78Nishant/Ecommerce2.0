const express=require('express')
const app=express()
const connectDB=require('./db/connection')
require('dotenv').config()
const authRoutes=require('./routes/auth.routes')

app.use(express.json())
app.use('/',authRoutes)

app.get('/check',(req,res)=>{
    res.json("Server is working fine")
})

const port=process.env.PORT || 'undefined'
app.listen(port,()=>{
    connectDB()
    console.log(`server running on port ${port}`)
})