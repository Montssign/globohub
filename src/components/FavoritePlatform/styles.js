import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { justifyContent: 'center', alignItems: 'center' },
})``;
