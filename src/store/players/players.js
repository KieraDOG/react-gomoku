import { createSlice } from '@reduxjs/toolkit';

/**
 * 
 * Player
 * color: [White, Black]
 * name: string
 * 
 *  */

export const playersSlice = createSlice({
  name: 'pieces',
  initialState: [],
  reducers: {
    join: (state, action) => {
      state.push({
        color: action.payload.color,
        name: action.payload.name,
      });
    },
  },
});

export const { join } = playersSlice.actions;

export default playersSlice.reducer;
