import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { fetchOtherDaysWeather } from '../redux/getWeather';
import styled from '@emotion/styled';


const OtherDaysWeather = () => {
    const { loading,
        error,
        locationName,
        countryName,
        temperature,
        description,
        condition,
        iconUrl,
        humidity } = useSelector(state => state.weatherReducer)
        const dispatch = useDispatch()
    const style = styled.div`
        root: {
          flexGrow: 1,
        },
        paper: {
          height: 100,
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
    `
    
    return (
        <Grid container margin='auto' border="1px solid green">
            <Grid item xs={12} md={6}>
                <Box padding='40px' height="">
                    {loading ? <PulseLoader color="primary" /> :
                        <>
                            <h4 style={{ margin: "0", }} >{locationName} {countryName}</h4>
                            <Box >
                                <Typography
                                    variant=""
                                    align="center"
                                    textAlign={{ xs: 'center', md: 'left' }}
                                >
                                    <div>
                                        <img src={iconUrl} width='70' alt='' />
                                        <h1 style={{ margin: "0", fontSize: '3em' }}>{temperature}</h1>
                                    </div>
                                    <div>{condition}</div>
                                </Typography>
                            </Box>
                            <Box >
                                <Grid container>
                                    <Grid item />
                                </Grid>
                            </Box>
                        </>
                    }
                </Box>
            </Grid>
        </Grid>
    )
}

export default OtherDaysWeather