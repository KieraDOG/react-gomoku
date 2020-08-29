import { createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    xs: 15,
    ys: 15,
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
