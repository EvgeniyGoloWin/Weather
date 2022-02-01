import React from "react";
import './Day-weather.css'
import './Weather.js'

function DayWeather({temp, icon, desc, newDate}) {
    let iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
    const Ctemp = Math.floor(temp - 273.15)
    let date = new Date(newDate).getDay()
    let day =''

     switch (date) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    console.log({temp, icon, desc})
    return(
        <div className={'MainBlock'}>

            <p className={'SomeDay'}> {day}</p>
            <img className={'Icon'} src={iconUrl} />
            <p className={'Degree'}>{Ctemp}</p>
            <div className={'State'}>
                <p className={'StateWeather'}>{desc}</p>
            </div>

        </div>
    )

}


export default DayWeather;