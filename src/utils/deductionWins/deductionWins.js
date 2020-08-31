import { assocPath } from 'ramda';

const pathToString = (input) => input.map((v) => v.toString());

const deductionWins = (xs, ys) => {
  const toWin = 5;

  let count = 0;
  let wins = {};

  for (let i = 0; i < ys; i ++) {
    for (let j = 0; j < xs - toWin + 1; j ++) {
      for (let k = 0; k < toWin; k ++) {
        const x = j + k;
        const y = i;

        wins = assocPath(pathToString([x, y, count]), count, wins);
      }

      count ++;
    }
  }

  for (let i = 0; i < ys - toWin + 1; i ++) {
    for (let j = 0; j < xs; j ++) {
      for (let k = 0; k < toWin; k ++) {
        const x = j;
        const y = i + k;

        wins = assocPath(pathToString([x, y, count]), count, wins);
      }

      count ++;
    }
  }

  for (let i = 0; i < ys - toWin + 1; i ++) {
    for (let j = 0; j < xs - toWin + 1; j ++) {
      for (let k = 0; k < toWin; k ++) {
        const x = j + k;
        const y = i + k;

        wins = assocPath(pathToString([x, y, count]), count, wins);
      }

      count ++;
    }
  }

  for (let i = toWin; i < ys; i ++) {
    for (let j = toWin; j < xs; j ++) {
      for (let k = 0; k < toWin; k ++) {
        const x = j - k;
        const y = i - k;

        wins = assocPath(pathToString([x, y, count]), count, wins);
      }

      count ++;
    }
  }

  return wins;
};

export default deductionWins;