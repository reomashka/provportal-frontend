import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { JobInfo } from '@/modules/JobInfo';
import { JobInfoPageMetadata } from './JobInfoPage.metadata';

export const JobInfoPage = () => {
	return (
		<>
			<JobInfoPageMetadata />
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
