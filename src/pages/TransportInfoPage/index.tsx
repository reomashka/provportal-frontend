import { TransportInfoPageMetadata } from './TransportInfoPage.metadata';
import { Header } from '@components/Header';
import { TransportInfo } from '@/modules/TransportInfo';
import { Footer } from '@components/Footer';

export const TransportInfoPage = () => {
	return (
		<>
			<TransportInfoPageMetadata />
			<Header />
			<main>
				<div className="container">
					<TransportInfo />
				</div>
			</main>
			<Footer />
		</>
	);
};
