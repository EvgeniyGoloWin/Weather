import React from "react";
import './Day-weather.css'
import './Weather.js'

function DayWeather({temp, icon, desc, newDate}) {
    let iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
    const Ctemp = Math.floor(temp - 273.15)
    let date = new Date(newDate).getDay()


    const curDay = (date)=>{
        switch (date) {
            case 0:
                return  "Sunday";
            case 1:
                return  "Monday";
            case 2:
                return "Tuesday";

            case 3:
               return  "Wednesday";

            case 4:
                return "Thursday";

            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default: return  'hui';
        }
    }


    console.log({temp, icon, desc})
    return(
        <div className={'MainBlock'}>

            <p className={'SomeDay'}> {curDay(date)}</p>
            <img className={'Icon'} src={iconUrl} alt={'day'}/>
            <p className={'Degree'}>{Ctemp}</p>
            <div className={'State'}>
                <p className={'StateWeather'}>{desc}</p>
            </div>

        </div>
    )

}


export default DayWeather;