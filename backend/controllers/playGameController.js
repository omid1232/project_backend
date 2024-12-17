const Question = require('../models/Question');
const Player = require('../models/Player');

let answeredQuestions = []; // Temporary in-memory store for demonstration

// Fetch a random question based on category
const getCurrentQuestion = async (req, res) => {
  const { categoryId } = req.query;

  try {
    const questions = await Question.find({ category: categoryId });
    if (!questions.length) {
      return res.status(404).json({ error: 'No questions available for this category.' });
    }

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    res.json({
      questionId: randomQuestion._id,
      question: randomQuestion.questionText,
      options: randomQuestion.options,
    });
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ error: 'Failed to fetch the question.' });
  }
};

// Fetch previously answered questions
const getAnsweredQuestions = async (req, res) => {
    const { playerId } = req.query; // Pass the playerId (username or ObjectId)

    try {
        // Find the player
        const player = await Player.findOne({ username: playerId }).populate({
            path: 'answeredQuestions.question',
            select: 'questionText correctAnswer',
        });

        if (!player) {
            return res.status(404).json({ error: 'Player not found.' });
        }

        // Map the answered questions into a more readable format
        const formattedQuestions = player.answeredQuestions.map((entry) => ({
            question: entry.question ? entry.question.questionText : 'Question not found',
            yourAnswer: entry.yourAnswer,
            correctAnswer: entry.question ? entry.question.correctAnswer : 'N/A',
            isCorrect: entry.isCorrect,
        }));

        res.json(formattedQuestions);
    } catch (error) {
        console.error('Error fetching answered questions:', error);
        res.status(500).json({ error: 'Failed to fetch answered questions.' });
    }
};


// Submit an answer and update player score
const submitAnswer = async (req, res) => {
  const { playerId, questionId, answer } = req.body;
  try {
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found.' });
    }

    const isCorrect = question.correctAnswer.toLowerCase() === answer.toLowerCase();
    const result = {
      questionId: question._id,
      question: question.questionText,
      yourAnswer: answer,
      correctAnswer: question.correctAnswer,
      isCorrect,
    };

    answeredQuestions.push(result);

    // Update player's score and answeredQuestions in the database
    const player = await Player.findOne({ username: playerId }); // Find player by username
    if (player) {
      player.answeredQuestions.push({
        question: questionId,
        yourAnswer: answer,
        isCorrect,
      });

      if (isCorrect) {
        player.score += 10; // Increment score for correct answers
      }

      await player.save();
    }

    res.json({ message: 'Answer submitted', result });
  } catch (error) {
    console.error('Error submitting answer:', error);
    res.status(500).json({ error: 'Failed to submit the answer.' });
  }
};

module.exports = { getCurrentQuestion, getAnsweredQuestions, submitAnswer };
