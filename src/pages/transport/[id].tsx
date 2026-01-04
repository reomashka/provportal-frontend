import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { MetadataWrapper } from '@/components/metadata-wrapper/MetadataWrapper';
import { TransportDetails } from '@/modules/transport/TransportDetails';

export const TransportDetailsPage = () => {
	return (
		<>
			<MetadataWrapper
				title="Транспорт | ProvPortal"
				description="Полная информация обо всех транспортных средствах сервера МТА Провинция. Каталог, характеристики и статистика транспорта на ProvPortal."
			/>
			<Header />
			<main>
				<div className="container">
					<TransportDetails />
				</div>
			</main>
			<Footer />
		</>
	);
};
