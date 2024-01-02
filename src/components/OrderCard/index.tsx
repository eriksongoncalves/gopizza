import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { OrderStatus } from '@shared/enums/orders';
import * as S from './styles';

export type OrderProps = {
  id: string;
  pizza: string;
  image: string;
  status: OrderStatus;
  table_number: string;
  quantity: string;
};

type Props = TouchableOpacityProps & {
  index: number;
  data: OrderProps;
};

export default function OrderCard({ index, data, ...rest }: Props) {
  return (
    <S.Container index={index} {...rest}>
      <S.Image source={{ uri: data.image }} />

      <S.Name>4 Queijos</S.Name>

      <S.Description>
        Mesa {data.table_number} - Qnt: {data.quantity}
      </S.Description>

      <S.StatusContainer status={data.status}>
        <S.StatusLabel status={data.status}>{data.status}</S.StatusLabel>
      </S.StatusContainer>
    </S.Container>
  );
}
