const express=require ("express");
const { createPost, getAllPosts } = require('../controllers/postController');



const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPosts);

module.exports = router;

