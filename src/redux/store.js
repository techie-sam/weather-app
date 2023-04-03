import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slice";
import themeToggleReducer from "./themeTogglerSlice";
// import reducer from "./reducers";

const store = configureStore({
    reducer:{
        weatherReducer,
        themeToggleReducer
    }
});
export default store