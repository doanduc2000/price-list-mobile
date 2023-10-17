import { createSlice } from '@reduxjs/toolkit';
import { createLanding, fetchLanding } from './landingApi';
const initialState = {
  loaded: false,
  loading: false,
  error: '',
  landingList: [],
  pagination: {},
};
const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanding.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchLanding.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.response?.status === 500) {
          state.loaded = false;
          return;
        }
        state.loaded = true;
        state.landingList = action.payload.data?.data;
        state.pagination = action.payload.data?.pagination;
      })
      .addCase(createLanding.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createLanding.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.code === 'ERR_NETWORK') {
          state.loaded = false;
          state.error = 'Lỗi kết nối';
          return;
        }
        if (action.payload.response?.data.status === false) {
          state.loaded = false;
          state.error = action.payload.response.data.message;
          return;
        }
        state.loaded = true;
        state.error = '';
        state.landingList.unshift(action.payload.data.data);
      });
  },
});
export default landingSlice;
export const loadedLandingSelector = (state) => state.landing.loaded;
export const loadingLandingSelector = (state) => state.landing.loading;
export const landingListSelector = (state) => state.landing.landingList;
export const landingPaginationSelector = (state) => state.landing.pagination;
export const landingErrorSelector = (state) => state.landing.error;
