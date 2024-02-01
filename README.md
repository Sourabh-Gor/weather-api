# Weather App

This repository contains a simple Weather App that consists of a Node.js server for fetching real-time weather data from the OpenWeatherMap API and an HTML file for displaying the weather results.

## Node.js Server (API)

### Prerequisites
- Node.js installed
- OpenWeatherMap API key (sign up at https://openweathermap.org/ to obtain a key)

### Setup
1. Clone the repository:
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   
2. Install dependencies:
   npm install

4. Replace the placeholder in the server code:

Open server.js and replace YOUR_OPENWEATHERMAP_API_KEY with your actual OpenWeatherMap API key.

5. Start the server:
   node server.js
   The server will run on http://localhost:3000.

### HTML File
Usage
Open index.html in your preferred code editor.

Modify the JavaScript code:

Locate the line:
javascript
fetch('http://localhost:3000/getWeather', {
If your server is running on a different port or domain, update the URL accordingly.
Open the HTML file in a web browser.

Enter the names of cities (comma-separated) in the text box.

Click the "Get Weather" button.

View the real-time weather results displayed on the page.
