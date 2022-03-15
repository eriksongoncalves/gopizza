import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

export type TypeProps = 'primary' | 'secondary';

type InputProps = TextInputProps & {
  type?: TypeProps;
};

const Input = ({ type = 'primary', ...rest }: InputProps) => {
  return <S.Container type={type} {...rest} />;
};

export { Input };
