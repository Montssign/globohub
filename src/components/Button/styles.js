import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 48px;
  width: 400px;
  max-width: 335px;
  border-radius: 24px;
  overflow: hidden;
  ${(props) =>
    props.type === 'primary' &&
    css`
      background: #f31d1d;
    `}

  ${(props) =>
    props.type === 'secondary' &&
    css`
      background: #222222;
    `}
`;

export const View = styled.View`
  border-radius: 24px;

  ${(props) =>
    props.type === 'primary' &&
    css`
      border: 0 solid rgba(0, 0, 0, 0.2);
      border-bottom-width: 3px;
    `}

  ${(props) =>
    props.type === 'secondary' &&
    css`
      border: 3px solid #f31d1d;
    `}
`;

export const Text = styled.Text`
  line-height: 45px;
  font-size: 16px;
  font-family: 'OpenSans-Bold';
  text-align: center;
  ${(props) =>
    props.type === 'link' &&
    css`
      text-decoration: underline;
    `}
`;
