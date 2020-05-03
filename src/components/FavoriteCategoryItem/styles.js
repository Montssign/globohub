import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 160px;
  height: 56px;
  background: #d1d1d120;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  ${props =>
    props.chosed &&
    css`
      border: 3px solid #c4170c;
      background: #d1d1d130;
    `}
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: 'OpenSans-Bold';
`;
