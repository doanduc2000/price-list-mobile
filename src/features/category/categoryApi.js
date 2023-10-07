import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../config/http';

export const fetchCategory = createAsyncThunk('category/fetchCategory', async (brandId) => {
  try {
    return await http.get(`category?brand_id=${brandId}`);
  } catch (e) {
    return e;
  }
});
