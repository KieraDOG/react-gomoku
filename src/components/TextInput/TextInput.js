import styled from 'styled-components';
import { width } from 'styled-system';

const TextInput = styled.input`
  margin: 0;
  display: inline-block;
  padding: 6px 12px;
  color: rgba(0, 0, 0, .85);
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  
  ${width}
`;

export default TextInput;
