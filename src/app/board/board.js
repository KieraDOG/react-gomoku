import { createSelector } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import Cell from './components/Cell';
import Row from './components/Row';
import { CELL_SIZE } from '../../constants';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(1px * ${(props) => CELL_SIZE * props.columns.length});
  height: calc(1px * ${(props) => CELL_SIZE * props.rows.length});
  background: #F9CC9D;
  border-radius: 4px;
`;

const Board = ({
  rows,
  columns,
}) => (
  <Layout
    columns={columns}
    rows={rows}
  >
    {rows.map((y) => (
      <Row key={y}>
        {columns.map((x) => (
          <Cell 
            key={x} 
            x={x}
            y={y}
            firstRow={y === 0}
            firstColumn={x === 0}
            lastRow={y === rows.length - 1}
            lastColumn={x === columns.length - 1}
          />
        ))}
      </Row>
    ))}
  </Layout>
);

const mapStateToProps = createSelector(
  ({ board }) => ({ xs: board.xs, ys: board.ys }),
  ({ xs, ys }) => {
    const rows = [];
    for (let i = 0; i < ys; i ++) {
      rows.push(i);
    }

    const columns = [];
    for (let i = 0; i < xs; i ++) {
      columns.push(i);
    }

    return { rows, columns };
  }
);

const ConnectedBoard = connect(mapStateToProps)(Board);

export default ConnectedBoard;
