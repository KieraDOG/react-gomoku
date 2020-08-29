import styled, { css } from 'styled-components';
import { CELL_SIZE } from '../../../../constants';

export default styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  
  height: calc(1px * ${CELL_SIZE});
  width: calc(1px * ${CELL_SIZE});
  position: relative;

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