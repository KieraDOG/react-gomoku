import styled from 'styled-components';
import { COLOR } from '../../constants';

const Piece = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid black;
  background: ${(props) => ({
    [COLOR.BLACK]: 'black',
    [COLOR.WHITE]: 'white',
  }[props.color])};
`;

export default Piece;