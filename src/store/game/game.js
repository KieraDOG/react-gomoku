import { createSlice } from '@reduxjs/toolkit';
import { assocPath } from 'ramda';
import { GAME_STATUS, BOARD_INITIAL_SIZE, COLOR } from '../../constants';

export const gameSlice = createSlice({
  name: 'board',
  initialState: {
    status: GAME_STATUS.PREPARE,
    configuration: {
      size: {
        xs: BOARD_INITIAL_SIZE.xs,
        ys: BOARD_INITIAL_SIZE.ys,
      },
      players: [{
        label: 'Player One',
        name: '',
        color: COLOR.BLACK,
      }, {
        label: 'Player Two',
        name: '',
        color: COLOR.WHITE,
      }],
    },
  },
  reducers: {
    run: (state, action) => {
      state.status = action.payload;
    },
    handleConfigurationChange: (state, action) => {
      const { path, value } = action.payload;

      state.configuration = assocPath(path, value, state.configuration);
    }
  },
});

export const { run, handleConfigurationChange } = gameSlice.actions;

export default gameSlice.reducer;
