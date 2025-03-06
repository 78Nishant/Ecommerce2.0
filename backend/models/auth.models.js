const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        lowercase:true
    },
    emailId:{
        type:String,
        required:[true,"Email Id is required"],
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Password required"],
        minlength:[6,"Password length should be atleast 6"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

exports.userSchema=mongoose.model('User',userSchema)