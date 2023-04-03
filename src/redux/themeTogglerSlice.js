import { createSlice } from "@reduxjs/toolkit";
import { createTheme } from '@mui/material/styles';
import { lightTheme, darkTheme } from "../themes/theme";

const initialState ={
    mode:"light"
}
const themeTogglerSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleTheme: (state, action)=>{
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
    
})
export const {toggleTheme} = themeTogglerSlice.actions
export default themeTogglerSlice.reducer