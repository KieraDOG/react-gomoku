import { createSlice } from '@reduxjs/toolkit';

/**
 * 
 * Piece
 * x: number
 * y: number
 * color: [White, Black]
 * 
 *  */

export const piecesSlice = createSlice({
  name: 'pieces',
  initialState: [],
  reducers: {
    place: (state, action) => {
      const { color, x, y } = action.payload;

      state.push({ color, x, y });
    }
  },
});

export const { place } = piecesSlice.actions;

export default piecesSlice.reducer;
