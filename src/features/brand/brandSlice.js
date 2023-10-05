import { createSlice } from '@reduxjs/toolkit';
import { fetchBrand } from './brandApi';

const initialState = {
  loading: false,
  loaded: false,
  brandList: [],
};
const brandSlice = createSlice({
  name: 'brand',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrand.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchBrand.fulfilled, (state, action) => {
        state.loaded = true;
        state.loading = false;
        state.brandList = action.payload.data.data;
      })
      .addCase(fetchBrand.rejected, (state, action) => {
        state.loaded = false;
        state.loading = false;
      });
  },
});
export default brandSlice;

export const loadingBrandSelector = (state) => state.brand.loading;
export const loadedBrandSelector = (state) => state.brand.loaded;
export const brandListSelector = (state) => state.brand.brandList;
