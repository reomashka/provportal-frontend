import { Header } from '@/components/Header';
import { TransportInfo } from '@/modules/TransportInfo';
import { Footer } from '@/components/Footer';
import { MetadataWrapper } from '@/components/MetadataWrapper';

export const TransportInfoPage = () => {
	return (
		<>
			<MetadataWrapper
				title="Транспорт | ProvPortal"
				description="Полная информация обо всех транспортных средствах сервера МТА Провинция. Каталог, характеристики и статистика транспорта на ProvPortal."
			/>
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
