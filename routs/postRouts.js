const express=require ("express");
const { createPost,
     getAllPosts,
     getpostById,
     updatePost,
     deletePost } = require('../controllers/postController');



const router = express.Router();

const auth=require("../middleware/auth")
router.post('/', auth,createPost);
router.get('/', getAllPosts);
router.get("/:id", getpostById);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);


module.exports = router;

