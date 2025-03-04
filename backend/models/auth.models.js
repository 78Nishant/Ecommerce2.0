const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

})

exports.authModel=mongoose.model('User',userSchema)