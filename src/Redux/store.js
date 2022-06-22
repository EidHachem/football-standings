import { configureStore } from '@reduxjs/toolkit';
import detailsSlice from './detailsSlice/detailsSlice';
import leaguesSlice from './leaguesSlice/leaguesSlice';

const store = configureStore({
  reducer: {
    leagues: leaguesSlice,
    details: detailsSlice,
  },
});

export default store;
