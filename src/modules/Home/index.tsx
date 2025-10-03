import { HeaderHome } from './components/HeaderHome';
import { MainSection } from './components/MainSection';
import { OnlineSection } from './components/OnlineSection';
import { NewsSection } from './components/NewsSection';

export const HomeModule = () => {
	return (
		<>
			<HeaderHome />
			<main>
				<MainSection />
				<OnlineSection />
				<NewsSection />
			</main>
		</>
	);
};
