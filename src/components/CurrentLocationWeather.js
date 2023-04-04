
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';

const CurrentLocationWeather = () => {
  const {loading, error, locationName, countryName} = useSelector(state=>state.weatherReducer)
console.log(error);
  return (
    <>
       {loading?<PulseLoader color="#36d7b7" />:
       <div>{locationName} {countryName}</div>

       }
       {
        error && error
       }
    </>
  )
}

export default CurrentLocationWeather