import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { AboutTeam } from '@/modules/about-team/AboutTeam';

export const AboutPage = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<AboutTeam />
				</div>
			</main>
			<Footer />
		</>
	);
};
