// import './App.css';
import Nav from './components/Nav';
import CurrentLocationWeather from './components/CurrentDayWeather';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box, Grid } from '@mui/material'
import { fetchCurrentLocationWeather, fetchOtherDaysWeather } from './redux/getWeather';
import { toggleTheme } from './redux/themeTogglerSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentLocationWeather())
    dispatch(toggleTheme())
  }, [])

  return (
    <Box height="100vh" backgroundColor="primary.main" >
      <Nav />
      <Box display="flex" justifyContent="center">
        <TextField type={'search'} label="Search for Location" m="auto" sx={{}} />
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
