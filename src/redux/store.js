import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";
import themeToggleReducer from "./themeTogglerSlice";
// import reducer from "./reducers";

const store = configureStore({
    reducer:{
        reducer,
        themeToggleReducer
    }
});
export default store