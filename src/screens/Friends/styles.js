/* eslint-disable indent */
import styled, { css } from 'styled-components/native';
import { FlatList, RectButton } from 'react-native-gesture-handler';

export const Container = styled(FlatList)`
  width: 100%;
  ${props =>
    props.newFriends &&
    css`
      max-height: ${(props.length || 0) * 72 >= 216
        ? 220
        : (props.length || 0) * 72}px;
    `}
  ${props =>
    !props.newFriends &&
    css`
      flex: 1;
    `}
`;

export const Line = styled.View`
  width: 80%;
  height: 1px;
  margin: 16px 10%;
  background-color: #f8f7fd;
  opacity: 0.7;
`;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  text-align: center;
  font-size: 16px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled(RectButton)`
  height: 48px;
  width: 48px;
  background-color: #c4170c;
  margin-right: 16px;
  border-radius: 4px;
  opacity: ${props => (props.canSend ? 1 : 0.4)};
  justify-content: center;
  align-items: center;
`;
