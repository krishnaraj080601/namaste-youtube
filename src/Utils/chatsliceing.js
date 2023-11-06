import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatsliceing=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addmessages:(state,action)=>{
            state.messages.splice(LIVE_CHAT_COUNT, 1);
            state.messages.push(action.payload);
        }
    }
})
export const {addmessages}=chatsliceing.actions;
export default chatsliceing.reducer;