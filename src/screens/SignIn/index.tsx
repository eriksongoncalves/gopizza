import Button from '@components/Button';
import Input from '@components/Input';
import { useAuth } from '@hooks/auth';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';

import branding from '@assets/brand.png';
import { SignInFormData, resolver } from './schemaValidation';
import * as S from './styles';

export default function SignIn() {
  const { signIn, loading } = useAuth();
  const {
    handleSubmit,
    // formState: { errors },
    control
  } = useForm<SignInFormData>({
    resolver,
    defaultValues: {
      email: 'eriksongoncalves@yahoo.com.br',
      password: '123456'
    }
  });

  async function handleSignIn(data: SignInFormData) {
    try {
      await signIn(data);
    } catch {
      Alert.alert('Login', 'E-mail ou senha inválidos');
    }
  }

  return (
    <S.Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <S.Content>
          <S.Brand source={branding} />

          <S.Title>Login</S.Title>

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                type="secondary"
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                type="secondary"
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <S.ForgotPasswordButton onPress={() => {}}>
            <S.ForgotPasswordButtonLabel>
              Esqueci minha senha
            </S.ForgotPasswordButtonLabel>
          </S.ForgotPasswordButton>

          <Button
            title="Entrar"
            isLoading={loading}
            onPress={() => handleSubmit(handleSignIn)()}
          />
        </S.Content>
      </KeyboardAvoidingView>
    </S.Container>
  );
}
