import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlice/weatherSlice";

export default configureStore({
    reducer: {
        weather: weatherReducer
    }
})