import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loadingReducer, { LOADING } from '../features/layout/loadingSlice';
import tabsReducer, { TABS } from '../features/tabs/tabsSlice';
import formReducer, { FORM } from '../components/contacts/formSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "store",
  version: 1,
  storage,
  whitelist: [TABS, FORM],
  blacklist: [LOADING]
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  [LOADING]: loadingReducer,
  [TABS]: tabsReducer,
  [FORM]: formReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);