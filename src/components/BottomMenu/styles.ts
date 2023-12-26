import styled, { css } from 'styled-components/native';

type TitleProps = {
  color: string;
};

type NotificationProps = {
  noNotifications: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, color }) => css`
    font-size: 18px;
    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${color};
  `};
`;

export const Notification = styled.View<NotificationProps>`
  ${({ noNotifications, theme }) => css`
    height: 20px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    margin-left: 8px;

    ${!noNotifications &&
    css`
      background-color: ${theme.colors.secondary_900};
    `};

    ${noNotifications &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.colors.shape};
    `};
  `};
`;

export const Quantity = styled.Text<NotificationProps>`
  ${({ noNotifications, theme }) => css`
    font-size: 12px;

    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${noNotifications ? theme.colors.secondary_500 : theme.colors.title};
  `};
`;
