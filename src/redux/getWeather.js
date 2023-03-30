import { createSlice } from '@reduxjs/toolkit';

// require('dotenv').config();
const API_key = "d";
const initialState = {
    endpoint: `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_key}`,
    longitude: null,
    latitude: null,
}
export const getWeather = createSlice({
    name:"getWeather",
    initialState,
    reducers: {
        getCurrentLocationWeather: () => {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position)
            },
                error => { 
                    console.log(error)
                })
        }

    }
})

export default getWeather.reducer;
export const { getCurrentLocationWeather } = getWeather.actions;

