import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 104px;
  height: 104px;
  border-radius: 52px;
  margin-right: 20px;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: 20px;

    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${theme.colors.secondary_900};
  `};
`;

export const Identification = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 20px;
    margin-right: 21px;

    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.secondary_400};
  `};
`;

export const Line = styled.View`
  ${({ theme }) => css`
    height: 1px;
    width: 100%;
    margin: 12px 0;
    margin-left: 124px;

    background-color: ${theme.colors.shape};
  `};
`;
