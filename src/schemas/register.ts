import { z } from 'zod';

export const registerSchema = z.object({
	name: z.string().trim().min(4, 'Имя минимум должно содержать 4 символа'),
	email: z.string().trim().email('Некоректный email'),
	password: z.string().trim().min(6, 'Пароль минимум должен содержать 6 символов'),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
