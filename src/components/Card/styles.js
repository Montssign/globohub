import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;

export const CardContainer = styled.View`
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
`;

export const ImageCover = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Category = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 14px;
`;

export const Title = styled.Text`
  margin-top: 8px;
  font-family: 'OpenSans-Bold';
  font-size: 20px;
`;

export const Header = styled(LinearGradient).attrs({
  colors: ['#00000090', '#00000080', '#00000070', '#00000000'],
})`
  position: absolute;
  width: 100%;
  padding: 16px 16px 48px;
`;

export const Body = styled.View`
  padding: 16px;

  ${props =>
    props.type === 'G1' &&
    css`
      background-color: #c4170c;
    `}

  ${props =>
    props.type === 'TechTudo' &&
    css`
      background-color: #333333;
    `}

  ${props =>
    props.type === 'GShow' &&
    css`
      background-color: #ec7d00;
    `}

  ${props =>
    props.type === 'Globoesporte' &&
    css`
      background-color: #3b9c00;
    `}

  ${props =>
    props.type === 'GloboPlay' &&
    css`
      background-color: #f31d1d;
    `}

  ${props =>
    props.type === 'GloboPlay' &&
    css`
      background-color: #805da3;
    `}
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: 'OpenSans-Regular';
`;
