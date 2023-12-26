import { LinearGradient } from 'expo-linear-gradient';
import {
  getBottomSpace,
  getStatusBarHeight
} from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

import Button from '@components/Button';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient
}))`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 33}px 24px 58px;
`;

export const Greeting = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GreetingEmoji = styled.Image`
  height: 32px;
  width: 32px;
  margin-right: 12px;
`;

export const GreetingText = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${theme.colors.title};
  `};
`;

export const MenuHeader = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 25px 24px 0;
    padding-bottom: 22px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.shape};
  `};
`;

export const MenuItemsNumber = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.secondary_900};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    line-height: 20px;
    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${theme.colors.secondary_900};
  `};
`;

export const NewProductButton = styled(Button)`
  margin: 0 24px;
  margin-bottom: ${getBottomSpace() + 12}px;
`;
