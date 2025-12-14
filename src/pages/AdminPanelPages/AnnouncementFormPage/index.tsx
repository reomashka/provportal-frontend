import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AnnouncementForm } from '@/modules/AdminPanel/AnnouncementForm';

export const NewsFormPage = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<AnnouncementForm />
				</div>
			</main>
			<Footer />
		</>
	);
};
