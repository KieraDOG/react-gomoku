import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { CELL_SIZE } from '../../../../constants';
import { createSelector } from '@reduxjs/toolkit';
import { place } from '../../../../store/pieces';
import getCurrentRoundPlayer from '../../../../utils/getCurrentRoundPlayer';

const Cursor = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: red;
  display: none;
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  height: calc(1px * ${CELL_SIZE});
  width: calc(1px * ${CELL_SIZE});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    ${Cursor} {
      display: block;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    background: black;

    ${(props) => {
      if (props.firstRow) {
        return css`
          top: 50%;
        `;
      }
    }}

    ${(props) => {
      if (props.lastRow) {
        return css`
          bottom: 50%;
        `;
      }
    }}
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    transform: translateY(-50%);
    bottom: 0%;
    height: 1px;
    background: black;

    ${(props) => {
      if (props.firstColumn) {
        return css`
          left: 50%;
        `;
      }
    }}

    ${(props) => {
      if (props.lastColumn) {
        return css`
          right: 50%;
        `;
      }
    }}
  }
`;

const Cell = (props) => (
  <Button {...props}>
    <Cursor />
  </Button>
);

const mapStateToProps = createSelector(
  ({ pieces, players }, { x, y }) => ({
    pieces,
    position: { x, y },
    players,
  }),
  ({ pieces, position, players }) => {
    const disabled = pieces
      .map((p) => `${p.x},${p.y}`)
      .includes(`${position.x},${position.y}`);

    return {
      disabled,
      pieces,
      players,
    };
  },
);

const mapDispatchToProps = (dispatch, { x, y }) => ({
  handlePlace: (player) => dispatch(place({ player, x, y })),
});

const mergeProps = (state, dispatch, props) => ({
  ...props,
  disabled: state.disabled,
  onClick: (event) => {
    event.preventDefault();

    const player = getCurrentRoundPlayer(state);

    dispatch.handlePlace(player);
  },
});

const ConnectedCell = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Cell);

export default ConnectedCell;
