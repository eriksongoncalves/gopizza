import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient
}))`
  padding: ${getStatusBarHeight() + 33}px 0 33px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    text-align: center;

    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${theme.colors.title};
  `};
`;
