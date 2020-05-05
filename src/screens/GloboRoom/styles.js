import styled from 'styled-components/native';
import YouTube from 'react-native-youtube';
import { FlatList, RectButton } from 'react-native-gesture-handler';

export const Container = styled(FlatList)`
  flex: 1;
`;

export const Video = styled(YouTube)`
  width: 100%;
  height: 250px;
`;

export const InputContainer = styled.View`
  height: 56px;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(RectButton)`
  height: 48px;
  width: 48px;
  background-color: #111;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 4px;
`;
