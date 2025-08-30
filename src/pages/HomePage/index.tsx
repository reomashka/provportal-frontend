import { HomePageMetadata } from './HomePage.metadata';
import { HomeModule } from '../../modules/HomeModule';
import { Footer } from '@components/Footer';

export const HomePage = () => {
	return (
		<div className="container">
			<HomePageMetadata />

			<HomeModule />
			<Footer />
		</div>
	);
};
