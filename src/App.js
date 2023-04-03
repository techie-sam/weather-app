import './App.css';
import Nav from './components/Nav';
import CurrentLocationWeather from './components/CurrentLocationWeather';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box } from '@mui/material'
import { fetchCurrentLocationWeather } from './redux/getWeather';
import { toggleTheme } from './redux/themeTogglerSlice';

function App() {
  const themer = "meee"
  const { theme, setTheme } = useState("dark")
  const { data, loading, error } = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(toggleTheme())
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
