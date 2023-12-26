import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export type InputTypeProps = 'primary' | 'secondary';

type Props = {
  type: InputTypeProps;
  isMultiline: boolean;
};

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor:
    type === 'primary' ? theme.colors.secondary_900 : theme.colors.primary_50
}))<Props>`
  ${({ theme, type, isMultiline }) => css`
    width: 100%;
    height: 56px;
    background-color: transparent;
    border-radius: 12px;
    font-size: 14px;
    padding: 7px 0;
    padding-left: 20px;
    margin-bottom: 16px;
    font-family: ${theme.fonts.family.dmSans.regular};
    border: 1px solid ${theme.colors.shape};
    color: ${type === 'primary'
      ? theme.colors.secondary_900
      : theme.colors.title};
    ${isMultiline &&
    css`
      vertical-align: top;
    `}
  `}
`;
