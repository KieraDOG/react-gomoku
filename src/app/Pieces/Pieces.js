import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Piece from '../../components/Piece';
import { CELL_SIZE } from '../../constants';

const getX = (props) => (CELL_SIZE / 2) * (props.x * 2 + 1);
const getY = (props) => (CELL_SIZE / 2) * (props.y * 2 + 1);
const Place = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: calc(1px * ${getX});
  top: calc(1px * ${getY});
`;

const Pieces = ({
  pieces,
}) => (
  <React.Fragment>
    {pieces.map((p) => (
      <Place key={`${p.x},${p.y}`} x={p.x} y={p.y}>
        <Piece color={p.color}/>
      </Place>
    ))}
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  pieces: state.pieces,
});

const ConnectedPieces = connect(mapStateToProps)(Pieces);

export default ConnectedPieces;