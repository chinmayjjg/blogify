const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  getpostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const verifyToken = require("../middleware/auth");

// Apply middleware to protected routes
router.post("/", verifyToken, createPost);
router.put("/:id", verifyToken, updatePost);   // ✅ Fix here
router.delete("/:id", verifyToken, deletePost);

router.get("/", getAllPosts);
router.get("/:id", getpostById);

module.exports = router;


