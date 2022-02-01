import React, {useEffect, useState} from "react";
import './Weather.css'
import DayWeather from "./DayWeather";
import LogIn from "./LogForm/LogIn";


function Weather() {
    const key = 'afd7366af467318a93c1826e76fb6bee';
    const ourCity = 'Kiev'

    const [state, setState] = useState(null)
    console.log(state)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ourCity}&appid=${key}&cnt=5`)
            .then((response) => {
                return response.json();
            }).then((data) => setState(data))
            .catch((e) => console.log(e))
    }, [])

    return (
        <div className={'KievWeather'}>
            <LogIn/>
            <h1 className={'MainText'}><em>{state.city.name}</em></h1>
            <div className={'day__blocks'} >
                {
                    state != null && state.list.map( (item, index) => {
                        return <div key={index} className={'day__blocks'}>
                            <DayWeather temp={item.main.temp} icon={item.weather[0].icon} desc={item.weather[0].description} newDate={item.dt_txt} />
                        </div>
                    })
                }
            </div>


        </div>
    )

}

export default Weather;