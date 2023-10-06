import { createSlice } from "@reduxjs/toolkit";
import { fetchLanding } from "./landingApi";
const initialState = {
  loaded: false,
  loading: false,
  error: "",
  landingList: []
};
const landingSlice = createSlice({
  name: "landing",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanding.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchLanding.fulfilled, (state, action) => {
        state.loaded = true;
        state.loading = false;
        state.landingList = action.payload.data?.data;
      });
  }
});
export default landingSlice;
export const loadedLandingSelector = (state) => state.landing.loaded;
export const loadingLandingSelector = (state) => state.landing.loading;
export const landingListSelector = (state) => state.landing.landingList;
