import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

type ButtonProps = {
  title: string;
  type?: S.ButtonTypeProps;
  isLoading?: boolean;
} & RectButtonProps;

export default function Button({
  title,
  type = 'primary',
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Container type={type} enabled={!isLoading} {...rest}>
      {isLoading ? <S.Loading /> : <S.Text>{title}</S.Text>}
    </S.Container>
  );
}
