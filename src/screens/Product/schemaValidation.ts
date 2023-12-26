import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const productFormSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  description: z.string().trim().min(1, 'Descrição obrigatória'),
  priceSizeP: z.string().trim().min(1, 'Informe o valor para o tamanho P'),
  priceSizeM: z.string().trim().min(1, 'Informe o valor para o tamanho M'),
  priceSizeG: z.string().trim().min(1, 'Informe o valor para o tamanho G')
});

export type ProductFormData = z.infer<typeof productFormSchema>;

export const resolver = zodResolver(productFormSchema);
