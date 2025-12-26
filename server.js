require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Middleware Validasi API Key
const validateApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!process.env.API_KEY || process.env.API_KEY === 'your_secret_api_key_here') {
        return res.status(500).json({ error: "System Error: process.env.API_KEY must be a valid key." });
    }
    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({ error: "Unauthorized: Invalid API Key" });
    }
    next();
};

app.get('/api/status', (req, res) => {
    res.json({ status: "Online", timestamp: new Date() });
});

app.post('/api/data', validateApiKey, (req, res) => {
    const { payload } = req.body;
    res.json({ message: "Data processed successfully", received: payload });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});