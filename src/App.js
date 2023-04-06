// import './App.css';
import Nav from './components/Nav';
import CurrentLocationWeather from './components/Main';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box, Grid } from '@mui/material'
import { fetchCurrentLocationWeather, fetchOtherDaysWeather, fetchWeatherByUserInput } from './redux/getWeather';
import { toggleTheme } from './redux/themeTogglerSlice';
import { fetchPreferredCity } from './redux/slice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentLocationWeather())
    dispatch(toggleTheme())
  }, [])
 const{ error } = useSelector(state => state.weatherReducer)

  return (
    <Box height="100vh" backgroundColor="primary.main" >
      <Nav />
      <Box display="flex" justifyContent="center">
        <TextField type={'search'} label="Search for Location" m="auto" onChange={(e)=>dispatch(fetchPreferredCity(e.target.value))} />
        <buittton onClick={()=>dispatch(fetchWeatherByUserInput())}>SEARCH</buittton>
        <div> {error&& error}</div>
      </Box>
      <Grid container margin='auto' >
        <Grid item xs='12' md='6' margin='auto'>
          <CurrentLocationWeather />
        </Grid>
      </Grid>

    </Box>
  );
}

export default App;
