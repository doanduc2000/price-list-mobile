import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginApi } from "./authApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  loaded: false,
  loading: false,
  currentUser: null,
  error: ""
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.loaded = false;
      state.currentUser = null;
      const clearToken = async () => {
        await AsyncStorage.clear();
      };
      clearToken();
    },
    resetLogin: (state) => {
      state.loaded = false;
      state.error = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.code === "ERR_NETWORK") {
          state.loaded = false;
          state.error = "Lỗi kết nối";
          return;
        }
        if (action.payload.response?.data.status === false) {
          state.loaded = false;
          state.error = action.payload.response.data.message;
          return;
        }
        state.loaded = true;
        state.error = "";
        state.currentUser = action.payload.data?.data;
      })
      .addCase(getUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.code === "ERR_NETWORK") {
          state.loaded = false;
          state.error = "Lỗi kết nối";
          return;
        }
        if (action.payload.code === "ERR_BAD_REQUEST") {
          state.loaded = false;
          const clearToken = async () => {
            await AsyncStorage.clear();
          };
          clearToken();
          return;
        }
        state.loaded = true;
        state.error = "";
        state.currentUser = action.payload.data?.data;
      });
  }
});
export default authSlice;
export const loadedAuthSelector = (state) => state.auth.loaded;
export const loadingAuthSelector = (state) => state.auth.loading;
export const currentUserSelector = (state) => state.auth.currentUser;
export const errorAuthSelector = (state) => state.auth.error;
