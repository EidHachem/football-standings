import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api-football-standings.azharimm.site/leagues';

export const fetchLeagues = createAsyncThunk('leagues/fetchLeagues', async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const leagues = data['data'].map((league, i) => ({
    id: league.id,
    name: league.name,
    logo: league.logos.light,
    index: i,
  }));
  return leagues;
});

export const fetchLeaguesSeasons = createAsyncThunk('leagues/fetchLeaguesSeasons', async (id) => {
  const response = await fetch(`${BASE_URL}${id}/seasons`);
  const seasonsData = await response.json();
  const seasons = seasonsData['data'].map((season) => ({
    id: season.id,
    name: season.name,
    logo: season.logos.light,
  }));
  return seasons;
});

const options = {
  name: 'leagues',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchLeagues.fulfilled]: (state, action) => action.payload,
    [fetchLeaguesSeasons.fulfilled]: (state, action) => action.payload,
  },
};

const leaguesSlice = createSlice(options);

export default leaguesSlice.reducer;
