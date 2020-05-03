import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.View`
  height: 168px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: 128px;
  width: 128px;
`;

export const SmallText = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 16px;
  color: #f8f7fd;
  opacity: 0.7;
`;

export const WhiteText = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 24px;
  color: #f8f7fd;
  text-transform: uppercase;
  margin-bottom: 32px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Bottom = styled.View`
  justify-content: space-between;
  flex-direction: row;
  height: 56px;
`;

export const Button = styled(RectButton)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
`;
