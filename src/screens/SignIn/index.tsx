import Input from '@src/components/Input';
import React from 'react';
import * as S from './styles';

export default function SignIn() {
  return (
    <S.Container>
      <Input type="secondary" placeholder="E-mail" />
      <Input type="secondary" placeholder="Senha" secureTextEntry />
    </S.Container>
  );
}
