import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    pageToken: null
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
  },
});

export const { setVideos, setPageToken } = videoSlice.actions;
export default videoSlice.reducer;