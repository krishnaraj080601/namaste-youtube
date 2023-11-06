import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatsliceing from "./chatsliceing";

const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatsliceing
    }
})
export default store;