import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import logoHome from '@/assets/logos/mainLogo.svg';
import { userStore } from '@/store/user';

import styles from './HeaderHome.module.scss';

export const HeaderHome = observer(() => {
	const { isAuth, user } = userStore;

	const handleLogout = () => {
		userStore.logout();
	};

	return (
		<header className={styles.header}>
			<div className={styles.containerHeader}>
				<div className={styles.headerItem}>
					<div className={styles.headerItemLogo}>
						<Link to="/">
							<img src={logoHome} alt="" />
						</Link>
					</div>
				</div>

				{user && (
					<div className={styles.authContainer}>
						<div>{user.name ?? 'Не указано'}</div>
						{user.avatarUrl && (
							<div>
								<img src={user.avatarUrl} alt="avatar" style={{ width: 64, height: 64 }} />
							</div>
						)}
					</div>
				)}

				{!isAuth && (
					<div className={styles.authContainer}>
						<Link to="/login" className={styles.authLink}>
							<p>Войти в аккаунт</p>
						</Link>
					</div>
				)}

				{isAuth && (
					<div className={styles.authContainer}>
						<button onClick={handleLogout} className={styles.authLink}>
							Выйти
						</button>
					</div>
				)}
			</div>
		</header>
	);
});
