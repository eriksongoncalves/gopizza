import { Credentials, User } from '@shared/types';
import { ReactNode } from 'react';

export type SignInCredentials = Credentials;

export type signUpInput = Omit<User, 'id'> & {
  password: string;
};

export type AuthContextProps = {
  user: User | undefined;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  signUp(data: signUpInput): Promise<void>;
  forgotPassword: (email: string) => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};
