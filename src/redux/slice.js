import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: true,
  locationName:null,
  data: null,
  error: null,
  temperature:null,
  description:null
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
      const {name, sys:{country}, weather:[desc], main:{temp}} = action.payload
      const {main, description} = desc
      console.log(name, temp, country, main)
        // action.type= "ola"
        // console.log(action)
      state.loading = false;
      // state.data = action.payload;
      state.locationName = name
      state.countryName = country
      state.error = null;
      state.temperature= temp+"°C"
      state.description = description
    },
    fetchCurrentWeatherFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error)
    },
  },
});

export const { fetchCurrentWeatherRequest, fetchCurrentWeatherSuccess,  fetchCurrentWeatherFailure } = weatherSlice.actions;


export default weatherSlice.reducer;
