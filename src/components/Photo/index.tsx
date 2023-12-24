import React from 'react';

import * as S from './styles';

type PhotoProps = {
  uri?: string;
};

export default function Photo({ uri }: PhotoProps) {
  if (uri) {
    return <S.Image source={{ uri }} />;
  }

  return (
    <S.Placeholder>
      <S.PlaceholderTitle>Nenhuma foto{'\n'} carregada</S.PlaceholderTitle>
    </S.Placeholder>
  );
}
