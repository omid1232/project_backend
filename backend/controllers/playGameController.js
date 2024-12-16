let answeredQuestions = [
    { question: "What is the capital of Germany?", yourAnswer: "Berlin", correctAnswer: "Berlin", isCorrect: true },
    { question: "What is the largest planet in our solar system?", yourAnswer: "Saturn", correctAnswer: "Jupiter", isCorrect: false }
];

let currentQuestion = { question: "What is the capital of France?", correctAnswer: "Paris" };

const getCurrentQuestion = (req, res) => {
    res.json({ question: currentQuestion.question });
};

const getAnsweredQuestions = (req, res) => {
    res.json(answeredQuestions);
};

const submitAnswer = (req, res) => {
    const { answer } = req.body;

    if (!answer) {
        return res.status(400).json({ error: 'Answer is required' });
    }

    const isCorrect = answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    const newEntry = {
        question: currentQuestion.question,
        yourAnswer: answer,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: isCorrect
    };

    answeredQuestions.push(newEntry);

    res.json({ message: 'Answer submitted', result: newEntry });
};

module.exports = { getCurrentQuestion, getAnsweredQuestions, submitAnswer };
