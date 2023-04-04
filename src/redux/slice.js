import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: true,
  locationName:null,
  data: null,
  error: null,
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
        // action.type= "ola"
        console.log(action)
      state.loading = false;
      state.data = action.payload;
      state.locationName = action.payload.name
      state.countryName = action.payload.sys.country
      state.error = null;
    },
    fetchCurrentWeatherFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(action.payload)
    },
  },
});

export const { fetchCurrentWeatherRequest, fetchCurrentWeatherSuccess,  fetchCurrentWeatherFailure } = weatherSlice.actions;


export default weatherSlice.reducer;
