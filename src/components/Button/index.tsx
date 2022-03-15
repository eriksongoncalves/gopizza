import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

export type TypeProps = 'primary' | 'secondary';

type ButtonProps = RectButtonProps & {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
};

const Button = ({
  title,
  type = 'primary',
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container type={type} enabled={!isLoading} {...rest}>
      {isLoading ? <S.Load /> : <S.Title>{title}</S.Title>}
    </S.Container>
  );
};

export { Button };
