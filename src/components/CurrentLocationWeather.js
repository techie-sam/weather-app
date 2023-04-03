
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';

const CurrentLocationWeather = () => {
  const {loading} = useSelector(state=>state)
  return (
    <div>
       {
        loading&&<PulseLoader color="#36d7b7" />
       }
    </div>
  )
}

export default CurrentLocationWeather