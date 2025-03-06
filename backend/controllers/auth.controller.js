const model=require('../models/auth.models')
const bcrypt=require('bcryptjs')
const User=model.userSchema
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    const {username,emailId,password}=req.body;
    console.log(username,emailId,password)

    try{
        let user=await User.findOne({emailId})
        if(user){
            res.status(401).json({message : "Email Id already registered !Try Login"})
        }
        const salt=await bcrypt.genSalt(10);
        const hashedpassword=await bcrypt.hash(password,salt);
        user=new User({
            username,
            emailId,
            password:hashedpassword
        });
        await user.save();
        const token=jwt.sign(
            {id:user._id,username:user.username},
            process.env.JWT_SECRET_KEY,
            {expiresIn : '3h'}
        );

        res.cookie('token',{token},{httpOnly:true,secure:true}).json({message : "User registered : ",username ,})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Unable to register user ! Server error"})
    }
}

exports.login=async(req,res)=>{
    const {emailId,password}=req.body;

    try{
        const user=await User.findOne({emailId})
        if(!user || !(await bcrypt.compare(password, user.password))){
            res.status(401).json({message : "Invalid Credentials"})
        }

        const token=jwt.sign(
            {id:user._id,username:user.username},
            process.env.JWT_SECRET_KEY,
            {expiresIn : '3h'}
        );

        
        res.cookie('token',{token},{httpOnly:true,secure:true}).json({message:"Logged In successfully"})
    }
    catch(error){
        res.status(500).json({message : "Server error ", error: error.message})
    }

}

exports.test=async(req,res)=>{
    res.status(401).json({message: "Welcome to protected route", user: req.user})
}