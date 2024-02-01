const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post('/getWeather', async (req, res) => {
  try {
    const { cities } = req.body;

    if (!cities || !Array.isArray(cities)) {
      return res.status(400).json({ error: 'Invalid input. Please provide an array of cities.' });
    }

    const weatherData = await Promise.all(
      cities.map(async (city) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f1279002e1c9bf2f9822eebc87684777`);
        return { [city]: `${response.data.main.temp}°C` };
      })
    );

    const result = { weather: {} };
    weatherData.forEach((data) => {
      Object.assign(result.weather, data);
    });

    res.json(result);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
