import React from 'react';
import { TextInputProps } from 'react-native';
import * as S from './styles';

type InputProps = {
  type?: S.InputTypeProps;
} & TextInputProps;

export default function Input({ type = 'primary', ...rest }: InputProps) {
  return (
    <S.Container
      autoCorrect={false}
      autoCapitalize="none"
      {...rest}
      type={type}
      isMultiline={!!rest.multiline}
    />
  );
}
