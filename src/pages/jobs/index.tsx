import bank from '@/assets/banners/bank.jpg';
import { Banner } from '@/components/banner/Banner';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { MetadataWrapper } from '@/components/metadata-wrapper/MetadataWrapper';
import { ScrollToTop } from '@/components/scroll-to-top/ScrollToTop';
import { JobsList } from '@/modules/jobs/JobsList';

export const JobsListPage = () => {
	return (
		<>
			<MetadataWrapper
				title="Работы | ProvPortal"
				description="Полная информация обо всех работах на МТА Провинция"
			/>
			<Header />

			<main>
				<div className="container">
					<Banner path={bank} title="Работы" />
					<JobsList />
					<ScrollToTop />
				</div>
			</main>

			<Footer />
		</>
	);
};
