import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  color: rgba(0,0,0,.85);
  font-size: 14px;
  margin-right: 8px;
  min-width: 75px;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;

  & ~ & {
    margin-top: 16px;
  }
`;

const FormControl = ({
  label,
  children,
}) => (
  <Layout>
    {label && (
      <Label>
        {label}
        :
      </Label>
    )}
    {children}
  </Layout>
);

export default FormControl;
