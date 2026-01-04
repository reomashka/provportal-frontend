import { observer } from 'mobx-react-lite';

import { HeaderHome } from './components/HeaderHome';
import { MainSection } from './components/MainSection';
import { NewsSection } from './components/NewsSection';
import { OnlineSection } from './components/OnlineSection';
import styles from './Home.module.scss';

export const Home = observer(() => {
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
});
