import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
    isMenuOpen:true,
    isDarkMode: true,
    isSearchOpen: false
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
        },
        toggleSearch: (state)=>{
            state.isSearchOpen = !state.isSearchOpen
        }
    },
});
export const {toggleMenu,closeMenu,toggleSearch}=appSlice.actions;
export default appSlice.reducer;