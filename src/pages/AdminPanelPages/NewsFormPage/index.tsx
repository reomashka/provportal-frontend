import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import NewsFormPage from '@modules/AdminPanel/NewsForm';

export const AddUpdatePage = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<NewsFormPage />
				</div>
			</main>
			<Footer />
		</>
	);
};
