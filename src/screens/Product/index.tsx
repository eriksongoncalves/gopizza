import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Button from '@components/Button';
import ButtonBack from '@components/ButtonBack';
import Input from '@components/Input';
import InputPrice from '@components/InputPrice';
import Photo from '@components/Photo';

import { PizzaModel } from '@shared/types/collections';
import { ProductNavigationProps } from '@shared/types/navigation';
import { ProductFormData, resolver } from './schemaValidation';
import * as S from './styles';

export default function Product() {
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as ProductNavigationProps;

  const {
    handleSubmit,
    setValue,
    // formState: { errors },
    control
  } = useForm<ProductFormData>({
    resolver
  });

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

  async function handleSavePizza(data: ProductFormData) {
    try {
      setIsLoading(true);

      if (!image) {
        Alert.alert('Opss', 'É preciso carregar uma imagem para a pizza');
        return;
      }

      const filename = new Date().getTime();
      const reference = storage().ref(`pizzas/${filename}.png`);

      await reference.putFile(image);

      const photo_url = await reference.getDownloadURL();

      await firestore()
        .collection('pizzas')
        .add({
          name: data.name,
          name_insensitive: data.name.toLowerCase().trim(),
          description: data.description,
          prices_sizes: {
            p: data.priceSizeP,
            m: data.priceSizeM,
            g: data.priceSizeG
          },
          photo_url,
          photo_path: reference.fullPath
        });

      Alert.alert('\\O/', 'Pizza cadastrada com sucesso');
      navigation.navigate('home');
    } catch (e) {
      setIsLoading(false);
      // eslint-disable-next-line no-console
      console.log('>>> handleSavePizza error', e);
      Alert.alert('Opss', 'Ocorreu um erro ao cadastrar a pizza');
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleDelete() {
    firestore()
      .collection('pizzas')
      .doc(id)
      .delete()
      .then(() => {
        storage()
          .ref(image)
          .delete()
          .then(() => navigation.navigate('home'));
      });
  }

  useEffect(() => {
    if (id) {
      firestore()
        .collection('pizzas')
        .doc(id)
        .get()
        .then(response => {
          const product = response.data() as PizzaModel;

          setValue('name', product.name);
          setValue('description', product.description);
          setValue('priceSizeP', product.prices_sizes.p);
          setValue('priceSizeM', product.prices_sizes.m);
          setValue('priceSizeG', product.prices_sizes.g);

          setImage(product.photo_url);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Header>
          <ButtonBack onPress={handleGoBack} />

          <S.Title>Cadastrar</S.Title>

          {id ? (
            <TouchableOpacity onPress={handleDelete}>
              <S.DeleteLabel>Deletar</S.DeleteLabel>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 20 }} />
          )}
        </S.Header>

        <S.Updoad canEdit={!id}>
          <Photo uri={image} />

          {!id && (
            <S.PickImageButton
              title="Carregar"
              type="secondary"
              onPress={handlePickerImage}
            />
          )}
        </S.Updoad>

        <S.Form>
          <S.InputGroup>
            <S.Label>Nome</S.Label>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input onChangeText={onChange} value={value} />
              )}
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.InputGroupHeader>
              <S.Label>Descrição</S.Label>
              <S.MaxCharacters>0 de 60 caracteres</S.MaxCharacters>
            </S.InputGroupHeader>

            <Controller
              name="description"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  multiline
                  maxLength={60}
                  style={{ height: 80 }}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Tamanhos e preços</S.Label>

            <Controller
              name="priceSizeP"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputPrice size="P" onChangeText={onChange} value={value} />
              )}
            />

            <Controller
              name="priceSizeM"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputPrice size="M" onChangeText={onChange} value={value} />
              )}
            />

            <Controller
              name="priceSizeG"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputPrice size="G" onChangeText={onChange} value={value} />
              )}
            />
          </S.InputGroup>

          {!id && (
            <Button
              title="Cadastrar Pizza"
              isLoading={isLoading}
              onPress={() => handleSubmit(handleSavePizza)()}
            />
          )}
        </S.Form>
      </ScrollView>
    </S.Container>
  );
}
