import styled from 'styled-components';

const Button = styled.button`
  text-align: center;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 2px;
  color: rgba(0, 0, 0, .85);
  background: #fff;
  border: 1px solid #d9d9d9;

  &:hover {
    filter: brightness(80%);
  }
`;

export default Button;
