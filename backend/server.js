const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const DB_URL = 'mongodb://127.0.0.1:27017/mydatabase'; // Update with your database name

mongoose.connect(DB_URL, {
    useNewUrlParser: true,  // Automatically parses connection string
    useUnifiedTopology: true, // Enables the new connection management engine
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Routes
const loginRoutes = require('./routes/loginRoutes');
const playGameRoutes = require('./routes/playGameRoutes');
const scoreboardRoutes = require('./routes/scoreboardRoutes');
const questionsRoutes = require('./routes/questionsRoute');
const categoriesRoutes = require('./routes/categoriesRoutes');

app.use('/api/login', loginRoutes);
app.use('/api/play_game', playGameRoutes);
app.use('/api/scoreboard', scoreboardRoutes);
app.use('/api/questions', questionsRoutes);
app.use('/api/categories', categoriesRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
