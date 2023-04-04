// import './App.css';
import Nav from './components/Nav';
import CurrentLocationWeather from './components/CurrentLocationWeather';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box } from '@mui/material'
import { fetchCurrentLocationWeather } from './redux/getWeather';
import { toggleTheme } from './redux/themeTogglerSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentLocationWeather())
    dispatch(toggleTheme())
  }, [])

  return (
    <>
      <Nav />
      <Box display="flex" justifyContent="center">
        <TextField type={'search'} label="Search for Location" m="auto" sx={{}} />
      </Box>
      <CurrentLocationWeather />

    </>
  );
}

export default App;
