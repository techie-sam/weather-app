
import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';

const CurrentLocationWeather = () => {
  const { loading, error, locationName, countryName, temperature, description } = useSelector(state => state.weatherReducer)
  const currentDate = new Date().toDateString();
  return (
    <>
      <h1>{temperature}</h1>
      <small>{description}</small><br></br>
      <>{currentDate},</>
      {loading ? <PulseLoader color="#36d7b7" /> :
        <h2 style={{ margin: "0" }}>{locationName} {countryName}</h2>
      }
    </>
  )
}

export default CurrentLocationWeather