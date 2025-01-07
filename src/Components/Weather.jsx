import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6d209411cbb7a0d88b97563111221d8&units=metric`
      );
      setWeather(res.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Weather App
        </h1>
        <div className="mb-6">
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter City Name"
            className="w-full p-3 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all"
          >
            Get Weather
          </button>
        </div>
        {weather && (
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {weather.name}
            </h2>
            <p className="text-6xl font-bold text-blue-600 mt-4">
              {Math.round(weather.main.temp)}°C
            </p>
            <p className="text-xl font-medium text-gray-700 mt-2">
              {weather.weather[0].description.toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
