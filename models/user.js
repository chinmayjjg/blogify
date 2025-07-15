const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
//schema part
const userSchema=new mongoose.Schema({
    username:{type:String,require:true,unique:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
}); 

//hash password before saving

userSchema.pre("save",async function(next){
    if (!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
});

// compare password with hashed password

userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);

};

module.exports=mongoose.model("user",userSchema)