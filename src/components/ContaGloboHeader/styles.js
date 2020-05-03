import styled from 'styled-components/native';
import Iconb from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  background-color: #f8f7fd;
`;

export const Image = styled.Image`
  height: 56px;
  width: 50%;
`;

export const Icon = styled(Iconb.Button).attrs({
  color: '#222',
  size: 30,
  iconStyle: { marginLeft: 4 },
})`
  width: 56px;
  height: 56px;
  background-color: #f8f7fd;
`;
