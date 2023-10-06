import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../config/http";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchLanding = createAsyncThunk(
  "landing/fetchLanding",
  async (brandId) => {
    try {
      const token = await AsyncStorage.getItem("token");
      return await http.get(`/landing?brand_id=${brandId}`, {
        headers: { Authorization: token }
      });
    } catch (e) {
      return e;
    }
  }
);
