import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { User } from '@shared/types';
import * as types from './types';

const STORAGE_USER_KEY = '@gopizza:users';

const AuthContext = createContext<types.AuthContextProps>(
  {} as types.AuthContextProps
);

const AuthProvider = ({ children }: types.AuthProviderProps) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const signIn = async (credentials: types.SignInCredentials) => {
    try {
      setLoading(true);

      const { user } = await auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );

      const userResponse = await firestore()
        .collection('users')
        .doc(user.uid)
        .get();

      const profile = userResponse.data() as User;

      const userData = {
        id: user.uid,
        name: profile.name,
        isAdmin: profile.isAdmin
      };

      await AsyncStorage.setItem(STORAGE_USER_KEY, JSON.stringify(userData));

      setUser(userData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('>>> signIn error', error);
      throw new Error('Login ou senha inválidos');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data: types.signUpInput) => {
    try {
      // eslint-disable-next-line no-console
      console.log('>>> data', data);
    } catch (error) {
      throw new Error('Ocorreu um erro ao tentar se cadastrar');
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem(STORAGE_USER_KEY);
      setUser(undefined);
    } catch (error) {
      throw new Error('Ocorreu um erro ao tentar fazer logout');
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error) {
      throw new Error('Ocorreu um erro ao tentar se cadastrar');
    }
  };

  useEffect(() => {
    async function loadUserData() {
      try {
        setLoading(true);
        const storageUserData = await AsyncStorage.getItem(STORAGE_USER_KEY);

        if (storageUserData) {
          const userData = JSON.parse(storageUserData) as User;

          setUser(userData);
        }
      } finally {
        setLoading(false);
      }
    }

    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn, signOut, signUp, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
