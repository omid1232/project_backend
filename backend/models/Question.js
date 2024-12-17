const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema(
  {
    questionText: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Question', QuestionSchema);
