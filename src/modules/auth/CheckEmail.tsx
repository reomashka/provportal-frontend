import { useState } from 'react';
import styles from './CheckEmail.module.scss';

export const CheckEmail = () => {
	const [isResending, setIsResending] = useState(false);
	const [isResent, setIsResent] = useState(false);

	const handleResendEmail = async () => {
		setIsResending(true);

		// Имитация отправки email
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsResending(false);
		setIsResent(true);

		// Сброс состояния через 3 секунды
		setTimeout(() => {
			setIsResent(false);
		}, 3000);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.iconWrapper}>
					<svg
						className={styles.icon}
						viewBox="0 0 64 64"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							x="8"
							y="16"
							width="48"
							height="32"
							rx="3"
							stroke="currentColor"
							strokeWidth="2.5"
							fill="none"
						/>
						<path
							d="M8 20L32 36L56 20"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<circle cx="46" cy="44" r="10" fill="#10B981" stroke="white" strokeWidth="2" />
						<path
							d="M43 44L45 46L49 42"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>

				<h1 className={styles.title}>Проверьте вашу почту</h1>

				<p className={styles.description}>
					Мы отправили письмо с подтверждением на вашу электронную почту. Пожалуйста, перейдите по
					ссылке в письме, чтобы завершить регистрацию.
				</p>

				<div className={styles.infoBox}>
					<svg className={styles.infoIcon} viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clipRule="evenodd"
						/>
					</svg>
					<span className={styles.infoText}>
						Письмо не пришло? Проверьте папку "Спам" или нажмите кнопку ниже
					</span>
				</div>

				<button
					className={`${styles.button} ${isResending ? styles.buttonLoading : ''} ${isResent ? styles.buttonSuccess : ''}`}
					onClick={handleResendEmail}
					disabled={isResending || isResent}>
					{isResending && (
						<svg className={styles.spinner} viewBox="0 0 24 24">
							<circle
								className={styles.spinnerCircle}
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
								fill="none"
							/>
						</svg>
					)}
					{isResent && (
						<svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					)}
					<span>
						{isResending
							? 'Отправляем...'
							: isResent
								? 'Письмо отправлено!'
								: 'Отправить письмо повторно'}
					</span>
				</button>

				<div className={styles.footer}>
					<a href="/login" className={styles.link}>
						Вернуться на страницу входа
					</a>
				</div>
			</div>
		</div>
	);
};
