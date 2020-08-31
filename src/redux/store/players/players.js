import { createSlice } from '@reduxjs/toolkit';
import { findIndex } from 'ramda';

/**
 * 
 * Player
 * color: [White, Black]
 * name: string
 * 
 *  */

export const playersSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {
    join: (state, action) => {
      state.push({
        color: action.payload.color,
        name: action.payload.name,
        wins: {},
        win: false,
      });
    },
    win: (state, action) => {
      const { player, wins } = action.payload;
      const index = findIndex((p) => p.color === player.color)(state);
      
      state.forEach((p, i) => {
        wins.forEach((count) => {
          if (i !== index) {
            p.wins[count] = 6;

            return
          } 
          
          const win = p.wins[count] || 0;
          const newWin = win + 1;
          p.wins[count] = newWin;

          if (newWin === 5) {
            p.win = true;
          }
        });
      });
    },
  },
});

export const { join, win } = playersSlice.actions;

export default playersSlice.reducer;
