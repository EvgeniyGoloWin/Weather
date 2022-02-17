import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async function () {
    const key = "afd7366af467318a93c1826e76fb6bee";
    const ourCity = "Kiev";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${ourCity}&appid=${key}&cnt=5`
    );
    const data = await response.json();
    return data;
  }
);
