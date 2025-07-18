const mongoose =require ("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, default: 'Anonymous' },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
