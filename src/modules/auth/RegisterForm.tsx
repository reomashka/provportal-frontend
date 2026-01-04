import { useMutation } from '@tanstack/react-query';
import { type FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { register } from '@/api/auth/register';
import googleLogo from '@/assets/logoGoogle.svg';
import yandexLogo from '@/assets/logoYandex.svg';
import { registerSchema } from '@/schemas/register';
import { userStore } from '@/store/user';

import styles from './LoginForm.module.scss';

type RegisterParams = { name: string; email: string; password: string };
type RegisterResponse = { token: string; user: any };

export const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const navigate = useNavigate();

	const mutation = useMutation<RegisterResponse, Error, RegisterParams>({
		mutationFn: ({ name, email, password }) => register(name, email, password),
		onSuccess: () => {
			userStore.fetchProfile();
			toast.success('Подтвердите почту');
			navigate('/check-email');
		},
		onError: (error: Error) => {
			setErrors({ email: error.message });
		},
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrors({});

		const result = registerSchema.safeParse({
			name,
			email,
			password,
		});

		if (!result.success) {
			const fieldErrors: Record<string, string> = {};

			result.error.issues.forEach((issue) => {
				const field = issue.path[0];
				if (field) {
					fieldErrors[field as string] = issue.message;
				}
			});

			setErrors(fieldErrors);
			return;
		}

		mutation.mutate({ name, email, password });
	};

	const handleGoogleLogin = () => {
		window.location.href = '/api/auth/google';
	};

	const handleYandexLogin = () => {
		window.location.href = '/api/auth/yandex';
	};

	return (
		<div className={styles.container}>
			<div className={styles.loginCard}>
				<div className={styles.header}>
					<h1 className={styles.title}>Регистрация</h1>
					<p className={styles.subtitle}>
						Заполните поля или зарегистрируйтесь любым удобным способом
					</p>
				</div>

				<div className={styles.oauthButtons}>
					<button
						type="button"
						className={`${styles.oauthButton} ${styles.google}`}
						onClick={handleGoogleLogin}>
						<img src={googleLogo} alt="Google" />
						<span>Войти через Google</span>
					</button>

					<button
						type="button"
						className={`${styles.oauthButton} ${styles.yandex}`}
						onClick={handleYandexLogin}>
						<img src={yandexLogo} alt="Яндекс" />
						<span>Войти через Яндекс</span>
					</button>
				</div>

				<div className={styles.divider}>
					<span className={styles.dividerLine}></span>
					<span className={styles.dividerText}>или</span>
					<span className={styles.dividerLine}></span>
				</div>

				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.formGroup}>
						<label htmlFor="name" className={styles.label}>
							Имя
						</label>
						<input
							id="name"
							className={styles.input}
							placeholder="Введите отображаемое имя"
							value={name}
							onChange={(e) => setName(e.target.value)}
							disabled={mutation.status === 'pending'}
						/>
						{errors.name && <span className={styles.errorText}>{errors.name}</span>}
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="email" className={styles.label}>
							Email
						</label>
						<input
							id="email"
							className={styles.input}
							placeholder="you@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							disabled={mutation.status === 'pending'}
						/>
						{errors.email && <span className={styles.errorText}>{errors.email}</span>}
					</div>

					<div className={styles.formGroup}>
						<div className={styles.labelRow}>
							<label htmlFor="password" className={styles.label}>
								Пароль
							</label>
						</div>
						<div className={styles.passwordWrapper}>
							<input
								id="password"
								type={showPassword ? 'text' : 'password'}
								className={styles.input}
								placeholder="Введите ваш пароль"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								disabled={mutation.status === 'pending'}
							/>
							<button
								type="button"
								className={styles.togglePassword}
								onClick={() => setShowPassword(!showPassword)}
								tabIndex={-1}>
								{showPassword ? (
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2">
										<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
										<line x1="1" y1="1" x2="23" y2="23" />
									</svg>
								) : (
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2">
										<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
										<circle cx="12" cy="12" r="3" />
									</svg>
								)}
							</button>
						</div>
						{errors.password && <span className={styles.errorText}>{errors.password}</span>}
					</div>

					<button
						type="submit"
						className={styles.submitButton}
						disabled={mutation.status === 'pending'}>
						{mutation.status === 'pending' ? (
							<span className={styles.spinner}></span>
						) : (
							'Зарегистрироваться'
						)}
					</button>
				</form>

				<div className={styles.footer}>
					<p className={styles.footerText}>
						Уже есть аккаунт?{' '}
						<Link to="/login" className={styles.signupLink}>
							Войти
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
