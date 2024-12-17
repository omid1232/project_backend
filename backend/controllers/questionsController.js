const Question = require('../models/Question');

const createQuestion = async (req, res) => {
  const { questionText, options, correctAnswer, category, difficulty } = req.body;

  if (!questionText || options.length !== 4 || !correctAnswer || !category || !difficulty) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const question = new Question({ questionText, options, correctAnswer, category, difficulty });
    await question.save();
    res.status(201).json({ message: 'Question created successfully', question });
  } catch (error) {
    res.status(500).json({ error: 'Error creating question' });
  }
};

module.exports = { createQuestion };
