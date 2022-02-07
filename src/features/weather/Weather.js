import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getDataWeather} from './weatherSlice'
import './Weather.css'
import DayWeather from "./DayWeather";
import LogIn from "../../LogForm/LogIn";


function Weather() {
    const key = 'afd7366af467318a93c1826e76fb6bee';
    const ourCity = 'Kiev'

    const state = useSelector(state => state.weather.data)
    const dispatch = useDispatch()
    console.log('1',state)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ourCity}&appid=${key}&cnt=5`)
            .then((response) => {
                return response.json();
            }).then((data) => dispatch(getDataWeather(data)))
            .catch((e) => console.log(e))
    }, [])

    return (
        <div className={'KievWeather'}>
            <LogIn/>
            {
            state.length !== 0  && <>
                                <h1 className={'MainText'}><em>{state.city.name}</em></h1>
                                <div className={'day__blocks'} >
                                    {
                                          state.list.map( (item, index) => {
                                            return <div key={index} className={'day__blocks'}>
                                                <DayWeather temp={item.main.temp} icon={item.weather[0].icon} desc={item.weather[0].description} newDate={item.dt_txt} />
                                            </div>
                                        })
                                    }
                                </div>
                </>
            }

        </div>
    )

}

export default Weather;