import {createSlice} from '@reduxjs/toolkit'

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState:{
        data: []
    },
    reducers: {
        getDataWeather: (state,{payload}) => {
            console.log("hi",payload)
            return{data: {...state.data, ...payload}}
        }
    }
})

export const {getDataWeather} = WeatherSlice.actions

export default WeatherSlice.reducer