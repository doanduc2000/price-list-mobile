import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import brandSlice from '../features/brand/brandSlice';
import authSlice from '../features/auth/authSlice';
import registerSlice from '../features/auth/registerSlice';

const rootReducer = combineReducers({
  brand: brandSlice.reducer,
  auth: authSlice.reducer,
  register: registerSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
