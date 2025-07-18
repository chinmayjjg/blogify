const Post = require('../models/post');

// Create Post
const createPost = async (req, res) => {
  try {
    const post = new Post({
      ...req.body,
      author: req.user.username // ✅ Set the logged-in user as author
    });
    const saved = await post.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Post By ID
const getpostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    console.log("🔎 Existing Post Author:", post.author);
    console.log("🔑 Authenticated User:", req.user.username);

    if (post.author !== req.user.username) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    post.title = req.body.title || post.title;
    post.body = req.body.body || post.body;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    console.error("❌ Error in updatePost:", err.message);
    res.status(500).json({ message: err.message });
  }
};


// Delete Post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    console.log("🔎 Existing Post Author:", post.author);
    console.log("🔑 Authenticated User:", req.user.username);

    if (post.author !== req.user.username) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("❌ Error in deletePost:", err.message);
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  createPost,
  getAllPosts,
  getpostById,
  updatePost,
  deletePost,
};
