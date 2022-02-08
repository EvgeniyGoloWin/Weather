import './App.css';
import Weather from "./features/weather/Weather";
import Counter from "./features/counter/counter";
import {fetchWeather} from "./features/weather/weatherSlice";
import {useEffect} from "react";


function App() {
    return (
        <>
            <Weather/>
            <Counter/>
        </>
    );
}

export default App;
