import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { MetadataWrapper } from '@/components/metadata-wrapper/MetadataWrapper';
import { JobDetails } from '@/modules/jobs/JobDetails';

export const JobDetailsPage = () => {
	return (
		<>
			<MetadataWrapper
				title="Работы | ProvPortal"
				description="Полная информация обо всех транспортных средствах сервера МТА Провинция. Каталог, характеристики и статистика транспорта на ProvPortal."
			/>
			<Header />
			<main>
				<div className="container">
					<JobDetails />
				</div>
			</main>
			<Footer />
		</>
	);
};
