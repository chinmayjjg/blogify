const router=require("express").Router();
const User=require("../models/user");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

router.post("/register",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(req.body.password,salt);
        const newUser=new User({
            userName:req.body.userName,
            email:req.body.email,
            password:hash
        });
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({error:err.message });
    }

});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ error: "user not found" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).json({ error: "credential not matched" });

    // FIXED: include username inside the JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      user: { id: user._id, username: user.username }
    });
   

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports =router;
