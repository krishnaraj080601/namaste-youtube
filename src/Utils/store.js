import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatsliceing from "./chatsliceing";
import themeSlice from "./themeSlice";
import videoSlice from "./videoSlice";

const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatsliceing,
        theme: themeSlice,
        video: videoSlice
    }
})
export default store;