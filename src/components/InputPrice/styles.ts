import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    width: '100%';
    height: 56px;
    border: 1px solid ${theme.colors.shape};
    border-radius: 12px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
  `}
`;

export const Size = styled.View`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-right-color: ${theme.colors.shape};
    margin-right: 18px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.secondary_900};
  `}
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-left: 7px;
`;
