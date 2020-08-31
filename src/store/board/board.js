import { createSlice } from '@reduxjs/toolkit';
import { BOARD_INITIAL_SIZE, GAME_STATUS } from '../../constants';
import deductionWins from '../../utils/deductionWins';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    xs: BOARD_INITIAL_SIZE.xs,
    ys: BOARD_INITIAL_SIZE.ys,
    wins: {},
  },
  reducers: {
    setSize: (state, action) => {
      state.xs = action.payload.xs;
      state.ys = action.payload.ys;
    },
  },
  extraReducers: {
    'game/run': (state, action) => {
      if (action.payload !== GAME_STATUS.PLAY) {
        return;
      }

      state.wins = deductionWins(state.xs, state.ys);
    }
  }
});

export const { setSize } = boardSlice.actions;

export default boardSlice.reducer;
