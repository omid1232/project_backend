let questions = []; // In-memory storage for questions

// Get all questions
const getQuestions = (req, res) => {
  try {
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions.' });
  }
};

// Create a new question
const createQuestion = (req, res) => {
  try {
    const { questionText, options, correctOption } = req.body;

    // Validation
    if (!questionText || !options || correctOption === undefined) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const newQuestion = {
      id: questions.length + 1,
      questionText,
      options,
      correctOption,
    };

    questions.push(newQuestion);
    res.status(201).json({ message: 'Question created successfully.', question: newQuestion });
  } catch (error) {
    res.status(500).json({ message: 'Error creating question.' });
  }
};

// Update a question
const updateQuestion = (req, res) => {
  try {
    const { id } = req.params;
    const { questionText, options, correctOption } = req.body;

    const question = questions.find((q) => q.id === parseInt(id));
    if (!question) {
      return res.status(404).json({ message: 'Question not found.' });
    }

    if (questionText) question.questionText = questionText;
    if (options) question.options = options;
    if (correctOption !== undefined) question.correctOption = correctOption;

    res.status(200).json({ message: 'Question updated successfully.', question });
  } catch (error) {
    res.status(500).json({ message: 'Error updating question.' });
  }
};

// Delete a question
const deleteQuestion = (req, res) => {
  try {
    const { id } = req.params;
    const questionIndex = questions.findIndex((q) => q.id === parseInt(id));

    if (questionIndex === -1) {
      return res.status(404).json({ message: 'Question not found.' });
    }

    questions.splice(questionIndex, 1);
    res.status(200).json({ message: 'Question deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting question.' });
  }
};

module.exports = {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
