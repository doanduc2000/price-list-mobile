import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../config/http";

export const fetchBrand = createAsyncThunk(
  "brand/fetchBrand",
  async () => await http.get("/brand")
);
