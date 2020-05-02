import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;

export const RedText = styled.Text`
  margin-top: 16px;
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
  text-align: center;
`;

export const SmallText = styled.Text`
  font-size: 20px;
  font-family: 'OpenSans-Regular';
  color: #f8f7fd;
  opacity: 0.7;
  text-align: center;
`;
