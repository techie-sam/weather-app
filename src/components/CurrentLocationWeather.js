
import { Box, Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';

const CurrentLocationWeather = () => {
  const { loading,
    error,
    locationName,
    countryName,
    temperature,
    description,
    condition,
    iconUrl } = useSelector(state => state.weatherReducer)

  const currentDate = new Date().toDateString();
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box bgcolor="grey.300" height="" textAlign="center">
          {loading ? <PulseLoader color="#36d7b7" /> :
            <>
              <img src={iconUrl}></img>
              <h2 style={{ margin: "0" }}>{locationName} {countryName}</h2>
              <small>{currentDate},</small>
              <h1>{temperature}</h1>
              <div>{condition}</div>
            </>
          }
        </Box>
      </Grid>
    </Grid>
  )
}

export default CurrentLocationWeather