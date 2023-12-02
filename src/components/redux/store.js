import { configureStore } from '@reduxjs/toolkit';
import { carsSlice } from './slice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  // devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
