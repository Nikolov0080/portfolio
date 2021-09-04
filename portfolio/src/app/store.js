import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loadingReducer, { LOADING } from '../features/layout/loadingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [LOADING]: loadingReducer
  },
});
