import './App.css';
import Nav from './components/Nav';
import CurrentLocationWeather from './components/CurrentLocationWeather';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box } from '@mui/material'
import { fetchCurrentLocationWeather } from './redux/getWeather';
// import { fetchCurrentWeather, fetchCurrentWeatherRequest, fetchCurrentWeatherSuccess } from './redux/slice';
// import { fetchCurrentWeather, getCurrentLocationWeather } from './redux/getWeather';
function App() {
  const { data, loading, error } = useSelector(state => state)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentLocationWeather())
  }, [])





  return (
    <>
      <Nav />
      <Box display="flex" justifyContent="center">
        <TextField type={'search'} label="Search for Location" m="auto" sx={{}} />
      </Box>
        <CurrentLocationWeather />
      {loading && "loading"}
      {data && data.data}
    </>
  );
}

export default App;
