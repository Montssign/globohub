import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  margin-top: 32px;
  background-color: #111111;
  border-radius: 4px;
`;

export const Text = styled.Text`
  text-align: center;
  line-height: 48px;
  font-family: 'OpenSans-Bold';
  font-size: 16px;
`;
