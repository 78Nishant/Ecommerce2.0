const mongoose=require('mongoose')

const connectDB=async ()=>{ 
    try{
        const connection_uri=process.env.MONGODB_URI
        if(!connection_uri){
            throw new Error('unable to find connection uri in .env')
        }
        await mongoose.connect(connection_uri);
        console.log("MongoDb connected successfully")
    }
    catch(error){
        console.log("Error in Connecting to MongoDB : ",error)
        process.exit(1)
    }
}

module.exports=connectDB;