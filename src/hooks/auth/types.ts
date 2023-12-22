import { Credentials, User } from '@shared/types';
import { ReactNode } from 'react';

export type AuthData = {
  token: string;
  user: User;
};

export type SignInCredentials = Credentials;

export type signUpInput = Omit<User, 'id'> & {
  password: string;
};

export type AuthContextProps = {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  signUp(data: signUpInput): Promise<void>;
  loading: boolean;
};

export type AuthProviderProps = {
  children: ReactNode;
};
