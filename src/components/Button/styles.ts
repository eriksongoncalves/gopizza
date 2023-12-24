import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export type ButtonTypeProps = 'primary' | 'secondary';

type Props = {
  type: ButtonTypeProps;
};

export const Container = styled(RectButton)<Props>`
  ${({ theme, type }) => css`
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    background-color: ${type === 'primary'
      ? theme.colors.success_900
      : theme.colors.primary_800};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.title};
  `}
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.title
}))``;
