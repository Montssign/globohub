import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const DisplayLine = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const TextWith = styled.Text`
  color: #adadad;
  font-family: 'OpenSans-${props => (props.bold ? 'Bold' : 'Regular')}';
  line-height: 40px;
`;

export const Line = styled.View`
  background: #adadad66;
  width: 30%;
  height: 1px;
`;

export const SocialButton = styled(RectButton)`
  margin: 0 16px;
  width: 140px;
`;

export const SocialButtonView = styled.View`
  border: 1px solid #adadad;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

export const Image = styled.Image`
  height: 24px;
  width: 24px;
  overflow: hidden;
  margin-right: 8px;
`;
