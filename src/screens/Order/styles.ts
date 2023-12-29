import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ContentScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient
}))`
  padding: ${getStatusBarHeight() + 34}px 24px 0;
`;

export const Photo = styled.Image`
  width: 240px;
  height: 240px;
  border-radius: 120px;
  align-self: center;
  position: relative;
  top: -120px;
`;

export const Sizes = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: -120px;
  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    margin-bottom: 32px;
    text-align: center;

    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${theme.colors.secondary_900};
  `};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    margin-bottom: 16px;

    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.secondary_900};
  `};
`;

export const FormRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputGroup = styled.View`
  width: 48%;
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    margin: 24px 0;
    align-self: flex-end;

    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.secondary_900};
  `};
`;
