import React from 'react';
import styled from 'styled-components';
import Configuration from './app/Configuration';
import Board from './app/Board';

const Game = styled.div`
  margin: 200px auto;
  width: 500px;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Game>
      <Board />
      <Configuration />
    </Game>
  );
}

export default App;
