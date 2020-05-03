import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const TextInput = styled.TextInput`
  color: #333333;
  font-family: 'OpenSans-Regular';
  font-size: 16px;
  padding: 8px;
  border: 1px solid #333;
`;

export const IconButton = styled(RectButton)`
  position: absolute;
  top: 10px;
  right: 16px;
`;
