import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { NewsForm } from '@modules/AdminPanel/NewsForm';

export const NewsFormPage = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<NewsForm />
				</div>
			</main>
			<Footer />
		</>
	);
};
