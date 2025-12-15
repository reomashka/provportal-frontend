import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JobInfo } from '@/modules/JobInfo';
import { MetadataWrapper } from '@/components/MetadataWrapper';

export const JobInfoPage = () => {
	return (
		<>
			<MetadataWrapper
				title="Транспорт | ProvPortal"
				description="Полная информация обо всех транспортных средствах сервера МТА Провинция. Каталог, характеристики и статистика транспорта на ProvPortal."
			/>
			<Header />
			<main>
				<div className="container">
					<JobInfo />
				</div>
			</main>
			<Footer />
		</>
	);
};
