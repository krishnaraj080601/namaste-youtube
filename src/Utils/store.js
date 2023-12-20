import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatsliceing from "./chatsliceing";
import themeSlice from "./themeSlice";

const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatsliceing,
        theme: themeSlice
    }
})
export default store;