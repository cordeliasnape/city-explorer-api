const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

app.get("/", (_, response) => response.json("Root route."));

app.get("/weather", async (request, response) => {
  const API_KEY = process.env.WEATHER_API_KEY;

  const lat = request.query.lat;
  const lon = request.query.lon;
  const searchQuery = request.query.searchQuery;

  const API = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}`;
  const res = await axios.get(API);

  const filteredCity = res.data.data.filter((city) => {
    return (
      city.city_name === searchQuery && city.lat === lat && city.lon === lon
    );
  });

  const wrangledData = filteredCity.map((day) => {
    return {
      description: day.weather.description,
      date: day.datetime,
    };
  });
  response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
