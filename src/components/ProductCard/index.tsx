import { Feather } from '@expo/vector-icons';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

export type ProductProps = {
  id: string;
  photo_url: string;
  name: string;
  description: string;
};

type Props = RectButtonProps & {
  data: ProductProps;
};

export default function ProductCard({ data, ...rest }: Props) {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content {...rest}>
        <S.Image source={{ uri: data.photo_url }} />

        <S.Details>
          <S.Identification>
            <S.Name>{data.name}</S.Name>
            <Feather
              name="chevron-right"
              size={18}
              color={theme.colors.shape}
            />
          </S.Identification>

          <S.Description>{data.description}</S.Description>
        </S.Details>
      </S.Content>

      <S.Line />
    </S.Container>
  );
}
