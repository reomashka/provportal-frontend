import { Footer } from '@components/Footer';
import { AdminNavigationGrid } from '@/modules/AdminPanel/AdminNavigationGrid/components/index';
import { Header } from '@components/Header';
import { Banner } from '@components/Banner';

export const AdminNavigationGridPage = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<Banner path="bank" title="Админка" />
					<AdminNavigationGrid />
				</div>
			</main>

			<Footer />
		</>
	);
};
