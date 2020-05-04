import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: ${props => (props.height ? props.height : 56)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #222222;
`;

export const Button = styled(RectButton)`
  height: ${props => (props.height ? props.height : 56)}px;
  width: ${props => (props.height ? props.height : 56)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 16px;
`;
