import { Link } from 'react-router-dom';
import styles from './HeaderHome.module.scss';
import logoHome from '@/assets/logos/mainLogo.svg';

export const HeaderHome = () => {
	return (
		<header className={styles.header}>
			<div className={styles.containerHeader}>
				<div className={styles.headerItem}>
					<div className={styles.headerItemLogo}>
						<Link to="/">
							<img src={logoHome} alt="#" />
						</Link>
					</div>
				</div>

				{/* <div className={styles.headerItemM}>
					<a href="https://t.me/prov_portal" className={styles.vkButton} target="_blank">
						<p>Примите участие в разработке новой версии сайта</p>
					</a>
				</div> */}
			</div>
		</header>
	);
};
