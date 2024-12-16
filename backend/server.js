const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const loginRoutes = require('./routes/loginRoutes');
const playGameRoutes = require('./routes/playGameRoutes');
const scoreboardRoutes = require('./routes/scoreboardRoutes');
const questionsRoutes = require('./routes/questionsRoutes');
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
