import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
      cacheResults:(state,action)=>{
        state={...action.payload,...state};
      }
    }
});
export default searchSlice;