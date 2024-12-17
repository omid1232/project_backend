const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: {type: String, required: true },
  score: { type: Number, default: 0 },
  answeredQuestions: [
    {
      question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
      yourAnswer: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
});

module.exports = mongoose.model('Player', playerSchema);

