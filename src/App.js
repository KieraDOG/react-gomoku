import React from 'react';
import styled from 'styled-components';
import Configuration from './app/Configuration';
import Board from './app/Board';
import Pieces from './app/Pieces';

const Game = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

function App() {
  return (
    <React.Fragment>
      <Game>
        <Board />
        <Pieces />
      </Game>
      <Configuration />
    </React.Fragment>
  );
}

export default App;
