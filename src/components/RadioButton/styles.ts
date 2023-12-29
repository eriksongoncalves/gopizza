import styled, { css } from 'styled-components/native';

export type RadioButtonProps = {
  selected: boolean;
};

export const Container = styled.TouchableOpacity<RadioButtonProps>`
  ${({ theme, selected }) => css`
    width: 104px;
    height: 82px;
    border-radius: 8px;
    padding: 14px 16px;

    border: 1px solid
      ${selected ? theme.colors.secondary_900 : theme.colors.shape};
    background-color: ${selected
      ? theme.colors.success_50
      : theme.colors.title};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;

    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${theme.colors.secondary_900};
  `};
`;

export const Radio = styled.View`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.secondary_900};
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Selected = styled.View`
  ${({ theme }) => css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${theme.colors.secondary_900};
  `}
`;
