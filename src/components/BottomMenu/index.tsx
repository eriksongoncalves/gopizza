import React from 'react';

import * as S from './styles';

type Props = {
  title: string;
  color: string;
  notifications?: string | undefined;
};

export default function BottomMenu({ title, color, notifications }: Props) {
  const noNotifications = notifications === '0';

  return (
    <S.Container>
      <S.Title color={color}>{title}</S.Title>

      {notifications && (
        <S.Notification noNotifications={noNotifications}>
          <S.Quantity noNotifications={noNotifications}>
            {notifications}
          </S.Quantity>
        </S.Notification>
      )}
    </S.Container>
  );
}
