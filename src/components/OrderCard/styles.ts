import styled, { DefaultTheme, css } from 'styled-components/native';

import { OrderStatus } from '@src/shared/enums/orders';

type ContainerProps = {
  index: number;
};

type StatusProps = {
  status: OrderStatus;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, index }) => css`
    width: 50%;
    align-items: center;
    padding: 24px;

    border-right-width: ${index % 2 > 0 ? 0 : 1}px;
    border-right-color: ${theme.colors.shape};
  `};
`;

export const Image = styled.Image`
  width: 104px;
  height: 104px;
  border-radius: 52px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    margin-top: 21px;

    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${theme.colors.secondary_900};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    margin-top: 11px;

    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.secondary_400};
  `};
`;

const statusContainerModifiers = {
  [OrderStatus.PREPARANDO]: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.alert_50};
    border: 1px solid ${theme.colors.alert_900};
  `,
  [OrderStatus.PRONTO]: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success_900};
  `,
  [OrderStatus.ENTREGE]: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary_900};
  `
};

export const StatusContainer = styled.View<StatusProps>`
  ${({ status, theme }) => css`
    padding: 4px 16px;
    border-radius: 12px;
    margin-top: 16px;
    align-items: center;
    justify-content: center;

    ${statusContainerModifiers[status](theme)};
  `}
`;

export const StatusLabel = styled.Text<StatusProps>`
  ${({ status, theme }) => css`
    font-size: 12px;
    line-height: 20px;

    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${status === OrderStatus.PREPARANDO
      ? theme.colors.alert_900
      : theme.colors.title};
  `};
`;
