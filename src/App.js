import './App.css';
import Weather from "./features/weather/weather/Weather";
import {fetchWeather} from "./features/weather/weatherSlice/weatherSlice";
import {useEffect} from "react";


function App() {
    return (
        <>
            <Weather/>
        </>
    );
}

export default App;
