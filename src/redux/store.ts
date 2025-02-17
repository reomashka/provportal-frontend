import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import scrollSlice from './slices/scrollSlice';

export const store = configureStore({
  reducer: { filter: filterSlice, scroll: scrollSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
