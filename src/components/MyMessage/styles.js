import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  min-height: 56px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 16px;
  margin: 8px 0;
`;

export const Image = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 32px;
  margin-right: 16px;
`;

export const Information = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 12px;
  margin-bottom: 8px;
  color: #f8f7fd60;
`;

export const Message = styled.Text`
  font-family: 'OpenSans-Regular';
  font-size: 16px;
`;

export const TextContainer = styled.View`
  flex: 1;
  min-height: 56px;
  align-items: flex-start;
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;
