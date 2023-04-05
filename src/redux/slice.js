import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: true,
  locationName: null,
  data: null,
  error: null,
  temperature: null,
  description: null,
  humidity: null,
  windSpeed: null
};


export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchCurrentWeatherRequest: (state) => {
      state.loading = true;
      state.error = null;
      console.log("Hello")
    },
    fetchCurrentWeatherSuccess: (state, action) => {
      console.log(action)
      const {name, sys:{country}, weather:[desc], wind:{speed}, main:{temp, humidity}} = action.payload
      const {main, description, icon} = desc
      console.log(name, temp, country, main, icon)
      
      state.iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
      state.loading = false;
      state.condition = main;
      state.locationName = name;
      state.countryName = country;
      state.error = null;
      state.temperature= Math.round(temp)+"°C";
      state.description = description;
      state.humidity = humidity;
      state.windSpeed = speed
    },
    fetchCurrentWeatherFailure: (state, action) => {
      state.loading = false;
      // state.error = action.payload;
      console.log(action.payload)
    },
  },
});

export const { fetchCurrentWeatherRequest, fetchCurrentWeatherSuccess,  fetchCurrentWeatherFailure } = weatherSlice.actions;


export default weatherSlice.reducer;
