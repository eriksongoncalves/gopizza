import styled, { css } from 'styled-components/native';

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

export const Placeholder = styled.View`
  ${({ theme }) => css`
    width: 160px;
    height: 160px;
    border-radius: 80px;
    justify-content: center;
    align-items: center;
    border: 1px dashed ${theme.colors.secondary_900};
  `}
`;

export const PlaceholderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    text-align: center;
    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.secondary_900};
  `}
`;
