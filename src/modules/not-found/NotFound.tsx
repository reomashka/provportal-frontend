import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

export const NotFound = () => {
	return (
		<div className="container">
			<h1 className={styles.title}>404</h1>
			<h2 className={styles.sub_title}>Страница не найдена</h2>
			<Link to="/" className={styles.btn}>
				Вернуться на главную
			</Link>
		</div>
	);
};
