import styled, { DefaultTheme, css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { TypeProps } from '.';

type ContainerProps = {
  type: TypeProps;
};

const containerModifiers = (theme: DefaultTheme) => ({
  bgColor: {
    primary: theme.COLORS.PRIMARY_900,
    secondary: theme.COLORS.PRIMARY_800
  }
});

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, type }) => css`
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;

    background-color: ${containerModifiers(theme).bgColor[type]};
  `}
`;

export const Title = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;

export const Load = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
  `}
`;
