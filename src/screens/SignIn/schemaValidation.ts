import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().min(1, 'E-mail obrigatório').email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve conter pelo menos 6 caracteres')
});

export type SignInFormData = z.infer<typeof signInFormSchema>;

export const resolver = zodResolver(signInFormSchema);
