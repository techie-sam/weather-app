
import { Box, Grid, Paper, Typography, makeStyles } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { PacmanLoader } from 'react-spinners';

const CurrentLocationWeather = () => {
  const { loading, error, locationName, countryName, temperature, windSpeed, condition, iconUrl, humidity } = useSelector(state => state.weatherReducer)

  const currentDate = new Date().toDateString();
  return (
    <Grid container margin='auto' >
      <Grid item xs={12} sm={10} margin="auto">
          <div> {error&& error}</div>
        <Box padding='40px' height="">

            {loading ? <PacmanLoader color="#000000" /> :
              <>
                <small>{currentDate},</small>
                <h3 style={{ margin: "0", }} >{locationName} {countryName}</h3>
                <Box >
                  <Typography
                    variant=""
                    align="center"
                    textAlign={'center'}
                  >
                    <div>
                      <img src={iconUrl} width='100' className='icon' alt="weather icon" />
                      <h1 style={{ margin: "0", fontSize: '4em' }}>{temperature}</h1>
                    </div>
                    <div>{condition}</div>
                  </Typography>
                </Box>
                <div >
                  <Grid container spacing={2}>
                    <Grid item xs={12} textAlign="center">
                      <Paper style={{ padding: '10px' }}>Humidity: {humidity}%</Paper>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                      <Paper style={{ padding: '10px' }}>Feels like: {condition}</Paper>
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                      <Paper style={{ padding: '10px' }}>Wind-speed: {windSpeed}</Paper>
                    </Grid>
                  </Grid>
                </div>
              </>
            }
        </Box>
      </Grid>
    </Grid>
  )
}

export default CurrentLocationWeather