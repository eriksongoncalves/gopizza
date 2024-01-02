import styled, { css } from 'styled-components/native';

export const Separator = styled.View`
  ${({ theme }) => css`
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.shape};
  `};
`;
