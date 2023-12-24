import { KeyboardAvoidingView } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

import Button from '@components/Button';

export const Container = styled(KeyboardAvoidingView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
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
    font-size: 1%;
    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.title};
  `}
`;

export const Updoad = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
`;

export const PickImageButton = styled(Button)`
  max-width: 90px;
  margin-left: 32px;
`;
