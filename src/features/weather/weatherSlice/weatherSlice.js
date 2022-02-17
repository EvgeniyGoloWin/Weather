import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../../../api/fetch";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    clearWeather: (state, { payload }) => {
      return { data: [] };
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
    [fetchWeather.rejected]: (state, action) => {},
  },
});
export const { clearWeather } = WeatherSlice.actions;

export default WeatherSlice.reducer;
