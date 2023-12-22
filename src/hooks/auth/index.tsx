import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { User } from '@shared/types';
import * as types from './types';

const AuthContext = createContext<types.AuthContextProps>(
  {} as types.AuthContextProps
);

const AuthProvider = ({ children }: types.AuthProviderProps) => {
  const [data, setData] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  const signIn = async (credentials: types.SignInCredentials) => {
    try {
      console.log('>>> credentials', credentials);
    } catch (error) {
      throw new Error('Login ou senha inválidos');
    }
  };

  const signUp = async (data: types.signUpInput) => {
    try {
      console.log('>>> data', data);
    } catch (error) {
      throw new Error('Ocorreu um erro ao tentar se cadastrar');
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setData({} as User);
    } catch (error) {
      throw new Error('Ocorreu um erro ao tentar fazer logout');
    }
  };

  useEffect(() => {
    async function loadUserData() {
      try {
        console.log('>>> loadUserData');
      } finally {
        setLoading(false);
      }
    }

    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data, signIn, signOut, signUp, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
