import { useMutation } from '@tanstack/react-query';
import { type FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { login } from '@/api/auth/login';
import googleLogo from '@/assets/logoGoogle.svg';
import yandexLogo from '@/assets/logoYandex.svg';
import { loginSchema } from '@/schemas/login';
import { userStore } from '@/store/user';

import styles from './LoginForm.module.scss';

type LoginParams = { email: string; password: string };
type LoginResponse = { token: string; user: any };

export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const navigate = useNavigate();

	const mutation = useMutation<LoginResponse, Error, LoginParams>({
		mutationFn: ({ email, password }) => login(email, password),
		onSuccess: () => {
			userStore.fetchProfile();
			toast.success('Вы вошли в аккаунт');
			navigate('/');
		},
		onError: (error: Error) => {
			setErrors({ password: error.message });
		},
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrors({});

		const result = loginSchema.safeParse({
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

		mutation.mutate({ email, password });
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
					<h1 className={styles.title}>С возвращением!</h1>
					<p className={styles.subtitle}>Заполните поля или войдите любым удобным способом</p>
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
						<label htmlFor="email" className={styles.label}>
							Email
						</label>
						<input
							id="email"
							className={styles.input}
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
							<a href="#" className={styles.forgotLink}>
								Забыли пароль?
							</a>
						</div>
						<div className={styles.passwordWrapper}>
							<input
								id="password"
								type={showPassword ? 'text' : 'password'}
								className={styles.input}
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
						{mutation.status === 'pending' ? <span className={styles.spinner}></span> : 'Войти'}
					</button>
				</form>

				<div className={styles.footer}>
					<p className={styles.footerText}>
						Нет аккаунта?{' '}
						<Link to="/register" className={styles.signupLink}>
							Зарегистрироваться
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
