import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light"
}
const themeTogglerSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const { toggleTheme } = themeTogglerSlice.actions;
export default themeTogglerSlice.reducer