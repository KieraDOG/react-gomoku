import { createSlice } from '@reduxjs/toolkit';
import { BOARD_INITIAL_SIZE } from '../../constants';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    xs: BOARD_INITIAL_SIZE.xs,
    ys: BOARD_INITIAL_SIZE.ys,
  },
  reducers: {
    setSize: (state, action) => {
      state.xs = action.payload.xs;
      state.ys = action.payload.ys;
    },
  },
});

export const { setSize } = boardSlice.actions;

export default boardSlice.reducer;
