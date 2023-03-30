import { configureStore } from "@reduxjs/toolkit";
import getWeatherReducer from "./getWeather";

const store = configureStore({
    reducer:{
        getWeatherReducer

    }
})
export default store