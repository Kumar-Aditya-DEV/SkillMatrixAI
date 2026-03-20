const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  candidateId: mongoose.Schema.Types.ObjectId,
  trainerId: mongoose.Schema.Types.ObjectId,
  comment: String
}, { timestamps: true });

module.exports = mongoose.model("Comment", CommentSchema);