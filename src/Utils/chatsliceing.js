import { createSlice } from "@reduxjs/toolkit";

const chatsliceing=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addmessages:(state,action)=>{
            state.messages.push(action.payload);
        }
    }
})
export const {addmessages}=chatsliceing.actions;
export default chatsliceing.reducer;