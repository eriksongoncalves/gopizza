import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ButtonBack from '@components/ButtonBack';
import Photo from '@components/Photo';
import * as S from './styles';

export default function Product() {
  const [image, setImage] = useState('');

  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    try {
      if (status === 'granted') {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          aspect: [4, 4]
        });

        if (!result.canceled && result.assets.length > 0) {
          setImage(result.assets[0].uri);
        }
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('>>> Error', e);
      Alert.alert('Ocorreu um erro ao carregar a foto.');
    }
  }

  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <S.Header>
        <ButtonBack onPress={() => {}} />

        <S.Title>Cadastrar</S.Title>

        <TouchableOpacity onPress={() => {}}>
          <S.DeleteLabel>Deletar</S.DeleteLabel>
        </TouchableOpacity>
      </S.Header>

      <S.Updoad>
        <Photo uri="https://github.com/eriksongoncalves.png" />

        <S.PickImageButton
          title="Carregar"
          type="secondary"
          onPress={handlePickerImage}
        />
      </S.Updoad>
    </S.Container>
  );
}
