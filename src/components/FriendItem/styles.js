import styled from 'styled-components/native';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 56px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 16px;
  justify-content: space-between;
  opacity: ${props => (props.status && props.status === 'Offline' ? 0.4 : 1)};
`;

export const UserContainer = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 32px;
  margin-right: 16px;
`;

export const TextContainer = styled.View``;

export const Name = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 16px;
`;

export const Status = styled.Text`
  font-family: 'OpenSans-Regular';
  opacity: 0.6;
`;

export const ActionButtons = styled.View`
  width: 112px;
  height: 56px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ActionButton = styled(RectButton)`
  min-width: 56px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  background-color: #222222;
`;
