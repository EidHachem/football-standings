import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api-football-standings.azharimm.dev/leagues';

export const fetchLeagues = createAsyncThunk('leagues/fetchLeagues', async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const leagues = data.data.map((league, i) => ({
    id: league.id,
    name: league.name,
    logo: league.logos.light,
    index: i,
  }));
  return leagues;
});

const options = {
  name: 'leagues',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchLeagues.fulfilled]: (state, action) => action.payload,
  },
};

const leaguesSlice = createSlice(options);

export default leaguesSlice.reducer;
