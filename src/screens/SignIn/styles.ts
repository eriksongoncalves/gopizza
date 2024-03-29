import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 }
}))`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  }
})`
  width: 100%;
  padding: 0 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    font-family: ${theme.fonts.family.dmSerifDisplay.regular};
    color: ${theme.colors.title};
    align-self: flex-start;
    margin-bottom: 24px;
  `}
`;

export const Brand = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: 340px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const ForgotPasswordButtonLabel = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.fonts.family.dmSans.regular};
    color: ${theme.colors.title};
  `}
`;
