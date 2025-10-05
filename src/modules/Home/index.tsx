import { HeaderHome } from './components/HeaderHome';
import { MainSection } from './components/MainSection';
import { OnlineSection } from './components/OnlineSection';
import { NewsSection } from './components/NewsSection';
import styles from './index.module.scss';

export const HomeModule = () => {
	return (
		<>
			<HeaderHome />
			<main>
				<p className={styles.title}>Основные разделы</p>
				<MainSection />

				<p className={styles.title}>Игровые серверы</p>
				<OnlineSection />

				<p className={styles.title}>Последние новости и обновления</p>
				<NewsSection />
			</main>
		</>
	);
};
