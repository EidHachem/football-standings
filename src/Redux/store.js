import { configureStore } from '@reduxjs/toolkit';
import leaguesSlice from './leaguesSlice/leaguesSlice';

const store = configureStore({
  reducer: {
    leagues: leaguesSlice,
  },
});

export default store;
