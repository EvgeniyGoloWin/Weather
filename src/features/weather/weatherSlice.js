import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async function() {
        const key = 'afd7366af467318a93c1826e76fb6bee';
        const ourCity = 'Kiev'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ourCity}&appid=${key}&cnt=5`);
        const data = await response.json();
        return data;
    }
)
export const WeatherSlice = createSlice({
    name: 'weather',
    initialState:{
        data: [],
        status: null,
        error: null,
    },
    reducers: {
        clearWeather: (state,{payload}) => {
            console.log("hi",payload)
            return{data: []}
        }
    },
    extraReducers: {
        [fetchWeather.pending]: (state) => {
            state.status = 'loading';
            state.error = null;},
        [fetchWeather.fulfilled]: (state,action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchWeather.rejected]: (state,action) => {

        },
    }
})
export const {clearWeather} = WeatherSlice.actions

export default WeatherSlice.reducer