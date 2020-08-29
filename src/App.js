import React from 'react';
import Board from './components/Board';
import styled from 'styled-components';

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
    </Game>
  );
}

export default App;
