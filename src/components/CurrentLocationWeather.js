
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';

const CurrentLocationWeather = () => {
  const {loading, locationName, countryName} = useSelector(state=>state.weatherReducer)

  return (
    <>
       {loading?<PulseLoader color="#36d7b7" />:
       <div>{locationName} {countryName}</div>
       }
    </>
  )
}

export default CurrentLocationWeather