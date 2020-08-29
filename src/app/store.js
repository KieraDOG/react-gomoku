import { configureStore } from '@reduxjs/toolkit';
import board from './board';
import pieces from './pieces';
import players from './players';

export default configureStore({
  reducer: {
    board,
    pieces,
    players,
  },
});
