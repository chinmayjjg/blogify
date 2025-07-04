const express=require("express");
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const postRoutes= require ("./routs/postRouts");

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ Mongo Error:', err));
