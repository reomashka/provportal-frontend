import { Header } from '@/components/Header';
import { AboutUsModule } from '@/modules/AboutUs';
import { Footer } from '@/components/Footer';

export const AboutUsPage = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<AboutUsModule />
				</div>
			</main>
			<Footer />
		</>
	);
};
