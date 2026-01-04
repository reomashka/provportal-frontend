import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().trim().email('Некоректный email'),
	password: z.string().trim().min(6, 'Пароль минимум должен содержать 6 символов'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
