const Post = require('../models/post');

//create post

const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    const saved = await post.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//get all post

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({createdAt:-1});
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { createPost ,getAllPosts};

//get single post

const getpostById=async(req,res)=>{
  try{
     const post= await Post.findById(req.params.id);
     if (!post) return res.status(400).json({message:"post not found"});
     res.json(post);
  }
  catch(err){
     res.status(500).json({message:err.message});    
  }
};

//update post

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(400).json({ message: "post not found" });

    if (post.author !== req.user.username) {
      return res.status(403).json({ message: "unauthorized" });
    }

    post.title = req.body.title || post.title;
    post.body = req.body.body || post.body;

    const updatedPost = await post.save(); // a bug was there fixed
    res.json(updatedPost);
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



// delete post
const deletePost=async(req,res)=>{
  try{
    const post=await Post.findById(req.params.id);
    if(!post)return res.status(400).json({message:"post not found"});
    if (post.auther!== req.user.username){
      return res.status(203).json({mesage:"Unauthorized"});

    }
    await post.remove();
    res.json({message:"post deleted"})
  }catch(err){
    res.status(500).json({message:err.message});

  }
};

module.exports = {
  getAllPosts,
  getpostById,
  createPost,
  updatePost,
  deletePost,
};