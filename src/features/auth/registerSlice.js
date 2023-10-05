import { createSlice } from '@reduxjs/toolkit';
import { registerApi } from './authApi';

const initialState = {
  loaded: false,
  loading: false,
  error: '',
};
const registerSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerApi.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerApi.fulfilled, (state, action) => {
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
      });
  },
});
export default registerSlice;
export const loadedRegisterSelector = (state) => state.register.loaded;
export const loadingRegisterSelector = (state) => state.register.loading;
export const errorRegisterSelector = (state) => state.register.error;
