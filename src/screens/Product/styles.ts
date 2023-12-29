import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

import Button from '@components/Button';

export const Container = styled.KeyboardAvoidingView`
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
  align-items: center;
  justify-content: space-between;
  padding: ${getStatusBarHeight() + 33}px 20px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${theme.colors.title};
  `}
`;

export const DeleteLabel = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.title};
  `}
`;

export const Updoad = styled.View<{ canEdit: boolean }>`
  ${({ canEdit }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: ${canEdit ? 'flex-start' : 'center'};
    align-items: center;
    margin: 32px 0;
    padding: 0 24px;
  `}
`;

export const PickImageButton = styled(Button)`
  max-width: 90px;
  margin-left: 32px;
`;

export const Form = styled.View`
  width: 100%;
  padding: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 12px;
    font-size: 14px;
    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.secondary_900};
  `};
`;

export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const InputGroupHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MaxCharacters = styled.Text`
  ${({ theme }) => css`
    font-size: 10px;
    margin-bottom: 12px;

    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.secondary_900};
  `};
`;
