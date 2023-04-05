import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark"
}
const themeTogglerSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            const root = window.document.documentElement;

            root.classList.remove("light");
            root.classList.add("dark");
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const { toggleTheme } = themeTogglerSlice.actions;
export default themeTogglerSlice.reducer