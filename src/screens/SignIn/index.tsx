import * as S from './styles';

import { Input } from '@components/Input';

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
    </S.Container>
  );
};

export { SignIn };
