const express=require("express");
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const postRoutes= require ("./routs/postRouts");
const authRoute = require('./routs/auth');
const connectDB = require("./config/db");




dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoute);

app.use('/api/posts', postRoutes);
app.get("/",(req,res)=>{
  res.send("blogify api is runnign");
})

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;


  app.listen(PORT,()=>{
  console.log(`server is runnig on port ${PORT}`);
 })