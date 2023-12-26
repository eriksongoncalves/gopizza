import { TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: -30px;
  padding: 0 24px;
`;

export const InputArea = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: row;
    align-items: center;
    border-radius: 16px;

    background-color: ${theme.colors.title};
    border: 1px solid ${theme.colors.shape};
  `};
`;

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;
    height: 52px;
    padding-left: 12px;
    font-family: ${theme.fonts.family.dmSans.regular};
  `};
`;

export const ButtonClear = styled.TouchableOpacity`
  margin-right: 7px;
`;

export const Button = styled(RectButton)`
  ${({ theme }) => css`
    width: 52px;
    height: 52px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.success_900};
    border-radius: 18px;
    margin-left: 7px;
  `};
`;
