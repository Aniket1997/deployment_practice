const express = require('express');
const cors = require('cors');  // Import cors package
const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: 'https://fantastic-semifreddo-1b04e5.netlify.app/'
}));

const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/convert', (req, res) => {
    const { celsius } = req.query;
    if (!celsius) {
        return res.status(400).json({ error: "Please provide a celsius value" });
    }
    const fahrenheit = celsiusToFahrenheit(Number(celsius));
    res.json({ celsius: Number(celsius), fahrenheit, message: "Success" });
});

module.exports = app;
