import styled, { DefaultTheme, css } from 'styled-components/native';
import { TextInput } from 'react-native';

import { TypeProps } from '.';

type ContainerProps = {
  type: TypeProps;
};

const containerModifiers = (theme: DefaultTheme) => ({
  placeholderTextColor: {
    primary: theme.COLORS.SECONDARY_900,
    secondary: theme.COLORS.PRIMARY_50
  },
  color: {
    primary: theme.COLORS.SECONDARY_900,
    secondary: theme.COLORS.TITLE
  }
});

export const Container = styled(TextInput).attrs<ContainerProps>(
  ({ theme, type }) => ({
    placeholderTextColor: containerModifiers(theme).placeholderTextColor[type]
  })
)<ContainerProps>`
  ${({ theme, type }) => css`
    width: 100%;
    height: 56px;
    background-color: transparent;
    border-radius: 12px;
    font-size: 14px;
    padding: 7px 0;
    padding-left: 20px;
    margin-bottom: 16px;
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE};
    color: ${containerModifiers(theme).color[type]};
  `}
`;
