import { configureStore } from '@reduxjs/toolkit';
import board from './board';
import pieces from './pieces';
import players from './players';
import game from './game';

export default configureStore({
  reducer: {
    board,
    pieces,
    players,
    game,
  },
});
