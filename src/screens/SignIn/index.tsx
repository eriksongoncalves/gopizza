import * as S from './styles';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

const SignIn = () => {
  return (
    <S.Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input placeholder="Senha" type="secondary" secureTextEntry />

      <Button title="Entrar" type="secondary" />
    </S.Container>
  );
};

export { SignIn };
