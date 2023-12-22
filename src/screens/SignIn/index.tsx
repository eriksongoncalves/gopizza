import Button from '@components/Button';
import Input from '@components/Input';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import * as S from './styles';

import branding from '@assets/brand.png';

export default function SignIn() {
  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <S.Content>
          <S.Brand source={branding} />

          <S.Title>Login</S.Title>

          <Input type="secondary" placeholder="E-mail" />
          <Input type="secondary" placeholder="Senha" secureTextEntry />

          <S.ForgotPasswordButton onPress={() => {}}>
            <S.ForgotPasswordButtonLabel>
              Esqueci minha senha
            </S.ForgotPasswordButtonLabel>
          </S.ForgotPasswordButton>

          <Button title="Entrar" />
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
