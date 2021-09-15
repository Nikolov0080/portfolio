import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loadingReducer, { LOADING } from '../features/layout/loadingSlice';
import tabsReducer, { TABS } from '../features/tabs/tabsSlice';
import formReducer, { FORM } from '../components/contacts/formSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [LOADING]: loadingReducer,
    [TABS]: tabsReducer,
    [FORM]: formReducer
  },
});
