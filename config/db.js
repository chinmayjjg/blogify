const mongoose=require("mongoose");

const connectDb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb is connected");
    }catch(err){
        console.error("mongodb connection error",err.message);
        process.exit(1);
    }
};
module.exports=connectDb;