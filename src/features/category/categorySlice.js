import { createSlice } from '@reduxjs/toolkit';
import { fetchCategory } from './categoryApi';

const initialState = {
  loading: false,
  loaded: false,
  categoriesList: [],
  error: '',
};
const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
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
        state.categoriesList = action.payload.data?.data;
      });
  },
});
export default categorySlice;
export const loadedCategorySelector = (state) => state.category.loaded;
export const loadingCategorySelector = (state) => state.category.loading;
export const categoriesListSelector = (state) => state.category.categoriesList;
