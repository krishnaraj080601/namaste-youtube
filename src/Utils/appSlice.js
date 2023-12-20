import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
    isMenuOpen:true,
    isDarkMode: true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen

        },
        toggleDarkMode:(state)=>{
            state.isDarkMode=!state.isDarkMode;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    },
});
export const {toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;