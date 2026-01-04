import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { AnnouncementForm } from '@/modules/admin/AnnouncementForm';

export const AnnouncementFormPage = () => {
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
