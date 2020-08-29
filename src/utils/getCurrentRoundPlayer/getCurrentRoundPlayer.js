import { findIndex } from 'ramda';

const getCurrentRoundPlayer = ({
  pieces,
  players,
}) => {
  const piece = pieces[pieces.length - 1];

  if (!piece) {
    return players[0];
  }

  const index = findIndex((p) => p.color === piece.color)(players);
  return players[(index + 1) % players.length];
};

export default getCurrentRoundPlayer;