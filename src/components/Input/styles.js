import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  padding: 16px;
`;

export const TextInput = styled.TextInput`
  border-radius: 4px;
  width: 100%;
  background-color: #11111150;
  height: 48px;
  padding: 0 16px 0 ${props => (props.hasIcon ? 42 : 16)}px;
`;

export const Icon = styled(MaterialIcon)`
  position: absolute;
  top: 27px;
  left: 27px;
`;
