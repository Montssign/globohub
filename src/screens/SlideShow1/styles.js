import styled from 'styled-components/native';

export const MessageContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: 38%;
  width: 80%;
`;

export const RedText = styled.Text`
  margin-top: 72px;
  font-size: 32px;
  color: #f31d1d;
  font-family: 'OpenSans-Bold';
  text-align: center;
  text-transform: uppercase;
`;

export const WhiteText = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-family: 'OpenSans-Bold';
  color: #f8f7fd;
  margin-bottom: 20px;
  text-align: center;
`;

export const SmallText = styled.Text`
  font-size: 20px;
  font-family: 'OpenSans-Regular';
  color: #f8f7fd;
  opacity: 0.7;
  text-align: center;
`;
