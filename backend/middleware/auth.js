const jwt=require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    const token=req.header('token')?.replace('Bearer ','')

    if(!token){
        return res.status(401).json({message : 'No token Authorization denied'})
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user=decoded
        next();
    }
    catch(error){
        res.status(401).json({message : 'Invalid token'})
    }
}

module.exports=authMiddleware;