const express=require('express')
const app=express()
require('dotenv').config()


app.get('/',(req,res)=>{
    res.json("Server is working fine")
})

const port=process.env.PORT || 'undefined'
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})