import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import styled, { css } from 'styled-components';
import Piece from '../../components/Piece';
import getCurrentRoundPlayer from '../../selectors/getCurrentRoundPlayer';

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

const Players = ({
  players,
  currentRoundPlayer,
}) => (
  <Layout>
    {players.map((p) => (
      <Player disabled={currentRoundPlayer !== p} key={p.color}>
        <Piece color={p.color} />
        &nbsp;
        {p.name}
      </Player>
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