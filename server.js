const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

// add your endpoints here
const data = require("./data/weather.json");

// console.log(data[0].lon);

function findWeather(data) {
  return data.filter(lat, lon, searchQuery);
}

app.get("/weather", (req, res) => {
  const { lat, lon, searchQuery } = req.query;
  console.log(findWeather(lat, loc));
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
