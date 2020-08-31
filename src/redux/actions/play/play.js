import { pathOr } from 'ramda';
import { place } from '../../store/pieces';
import { win } from '../../store/players';
import getCurrentRoundPlayer from '../../selectors/getCurrentRoundPlayer';

const play = ({ x, y }) => (dispatch, getState) => {
  const state  = getState();

  const currentRoundPlayer = getCurrentRoundPlayer(state);
  dispatch(place({ color: currentRoundPlayer.color, x, y }));

  const { board } = state;
  const winMethods = pathOr({}, [x, y], board.wins);
  const wins = Object.keys(winMethods);
  dispatch(win({ player: currentRoundPlayer, wins }));
};

export default play;