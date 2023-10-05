import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../config/http";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registerApi = createAsyncThunk("auth/register", async (body) => {
  try {
    return await http.post(
      "/register",
      JSON.stringify({
        name: body.name,
        brand_id: body.brand,
        email: body.email,
        password: body.password,
        c_password: body.retypePasword
      })
    );
  } catch (e) {
    return e;
  }
});

export const loginApi = createAsyncThunk("auth/login", async (body) => {
  try {
    const response = await http.post(
      "/login",
      JSON.stringify({
        email: body.email,
        password: body.password
      })
    );
    await AsyncStorage.setItem("token", response.data.data.token);
    return response;
  } catch (e) {
    return e;
  }
});
export const getUser = createAsyncThunk("auth/getUser", async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await http.get("/user", {
      headers: { Authorization: token }
    });
    return response;
  } catch (e) {
    return e;
  }
});
