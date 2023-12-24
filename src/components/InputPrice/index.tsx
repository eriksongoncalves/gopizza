import React from 'react';
import { TextInputProps } from 'react-native';
import * as S from './styles';

type InputProps = {
  size: string;
} & TextInputProps;

export default function InputPrice({ size, ...rest }: InputProps) {
  return (
    <S.Container>
      <S.Size>
        <S.Label>{size}</S.Label>
      </S.Size>

      <S.Label>R$</S.Label>

      <S.Input
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="number-pad"
        {...rest}
      />
    </S.Container>
  );
}
