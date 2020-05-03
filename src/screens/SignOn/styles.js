import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background-color: #f8f7fd;
  padding: 32px;
`;

export const Message = styled.Text`
  margin: 0 0 32px;
  color: #333333;
  font-size: 16px;
  font-family: 'OpenSans-Regular';
  text-align: center;
`;

export const Label = styled.Text`
  color: #333333;
  font-family: 'OpenSans-Regular';
  margin-top: 8px;
`;

export const DisplayLine = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const Text = styled.Text`
  font-family: 'OpenSans-Regular';
  color: #333;
`;

export const Button = styled.Text`
  font-family: 'OpenSans-Bold';
  color: #333;
`;
