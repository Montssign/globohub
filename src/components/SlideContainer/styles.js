import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  padding: 20px 8px;
`;

export const Ball = styled.View`
  height: 9px;
  width: 9px;
  background: #d1d1d1;
  opacity: 0.2;
  border-radius: 6px;

  ${(props) =>
    props.active &&
    css`
      background: #f31d1d;
      width: 12px;
      height: 12px;
      opacity: 1;
    `}
`;
