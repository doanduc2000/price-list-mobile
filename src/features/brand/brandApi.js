import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../app/http';

export const fetchBrand = createAsyncThunk('brand/fetchBrand', async () => await http.get('/brand'));
