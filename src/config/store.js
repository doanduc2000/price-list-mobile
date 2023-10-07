import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import brandSlice from '../features/brand/brandSlice';
import authSlice from '../features/auth/authSlice';
import registerSlice from '../features/auth/registerSlice';
import landingSlice from '../features/landing/landingSlice';
import categorySlice from '../features/category/categorySlice';

const rootReducer = combineReducers({
  brand: brandSlice.reducer,
  auth: authSlice.reducer,
  register: registerSlice.reducer,
  landing: landingSlice.reducer,
  category: categorySlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
