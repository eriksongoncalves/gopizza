import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type Props = TouchableOpacityProps &
  S.RadioButtonProps & {
    title: string;
  };

export default function RadioButton({
  title,
  selected = false,
  ...rest
}: Props) {
  return (
    <S.Container selected={selected} {...rest}>
      <S.Radio>{selected && <S.Selected />}</S.Radio>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
