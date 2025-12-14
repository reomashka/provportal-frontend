import { Header } from '@/components/Header';
import { Banner } from '@/components/Banner';
import { JobsList } from '@/modules/JobsList';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Footer } from '@/components/Footer';
import bank from '@/assets/banners/bank.jpg';

export const JobsListPage = () => {
	return (
		<>
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
