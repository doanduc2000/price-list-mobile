import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../config/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchLanding = createAsyncThunk('landing/fetchLanding', async ({ brandId, link }) => {
  try {
    const token = await AsyncStorage.getItem('token');
    return await http.get(`/landing?brand_id=${brandId}&link=${link}`, {
      headers: { Authorization: token },
    });
  } catch (e) {
    return e;
  }
});

export const createLanding = createAsyncThunk('landing/createLanding', async (body) => {
  try {
    const token = await AsyncStorage.getItem('token');
    return await http.post(
      `/landing/create`,
      JSON.stringify({
        brand_id: body.brandId,
        category_id: body.category,
        url: body.url,
        status: body.status,
      }),
      {
        headers: { Authorization: token },
      }
    );
  } catch (e) {
    return e;
  }
});
