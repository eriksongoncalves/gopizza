import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: ${theme.colors.primary_100};
  `}
`;
