require('dotenv').config();
const API_key = process.env.API_key;
navigator.geolocation.getCurrentPosition(position=>() error=>{console.log(error)})
const initialState = {
    endpoint : `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_key}`
    logitude: 
}