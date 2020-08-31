import { createSelector } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { CELL_SIZE } from '../../../../constants';
import play from '../../../../redux/actions/play';

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

const getDisabled = createSelector(
  ({ pieces }, { x, y }) => ({ pieces, x, y }),
  ({ pieces, x, y }) => pieces
    .map((p) => `${p.x},${p.y}`)
    .includes(`${x},${y}`),
);

const mapStateToProps = createSelector(
  getDisabled,
  (disabled) => ({ disabled }),
);

const mapDispatchToProps = (dispatch, { x, y }) => ({
  onClick: (event) => {
    event.preventDefault();
    dispatch(play({ x, y }));
  },
});

const ConnectedCell = connect(mapStateToProps, mapDispatchToProps)(Cell);

export default ConnectedCell;
