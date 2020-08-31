import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import styled, { css } from 'styled-components';
import Piece from '../../components/Piece';
import getCurrentRoundPlayer from '../../redux/selectors/getCurrentRoundPlayer';

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Player = styled.div`
  display: flex;
  align-items: center;

  ${(props) => props.disabled && css`
    opacity: 25%;
  `}
`;

const Win = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255,255,255,0.8);
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Players = ({
  players,
  currentRoundPlayer,
}) => (
  <Layout>
    {players.map((p) => (
      <React.Fragment key={p.color}>
        {p.win && (
          <Win>
            <Piece color={p.color} />
            &nbsp;
            {`${p.name} Wins!`}
          </Win>
        )}
        <Player disabled={currentRoundPlayer !== p}>
          <Piece color={p.color} />
          &nbsp;
          {p.name}
        </Player>
      </React.Fragment>
    ))}
  </Layout>
);

const mapStateToProps = createSelector(
  ({ players }) => ({ players }),
  getCurrentRoundPlayer,
  ({ players }, currentRoundPlayer) => ({ players, currentRoundPlayer }),
);

const ConnectedPlayers = connect(mapStateToProps)(Players);

export default ConnectedPlayers;