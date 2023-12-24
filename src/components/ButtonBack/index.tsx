import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

type ButtonBackProps = TouchableOpacityProps;

export default function ButtonBack({ ...rest }: ButtonBackProps) {
  const theme = useTheme();

  return (
    <S.Container {...rest}>
      <MaterialIcons name="chevron-left" size={18} color={theme.colors.title} />
    </S.Container>
  );
}
