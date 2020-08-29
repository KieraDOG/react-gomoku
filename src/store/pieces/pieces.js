import { createSlice } from '@reduxjs/toolkit';

/**
 * 
 * Piece
 * x: number
 * y: number
 * color: player.color [White, Black]
 * 
 *  */

export const piecesSlice = createSlice({
  name: 'pieces',
  initialState: [],
  reducers: {
    place: (state, action) => {
      state.push({
        color: action.payload.player.color,
        x: action.payload.x,
        y: action.payload.y,
      })
    }
  },
});

export const { place } = piecesSlice.actions;

export default piecesSlice.reducer;
