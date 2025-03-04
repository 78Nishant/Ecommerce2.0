const express=require('express')
const app=express()


app.get('/',(req,res)=>{
    res.json("Server is working fine")
})

const port=3000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})