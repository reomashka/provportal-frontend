import { Footer } from '@/components/Footer';
import { AdminNavigationGrid } from '@/modules/AdminPanel/AdminNavigationGrid/components/index';
import { Header } from '@/components/Header';
import { Banner } from '@/components/Banner';

import bank from '@/assets/banners/bank.jpg';
export const AdminNavigationGridPage = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<Banner path={bank} title="Админка" />
					<AdminNavigationGrid />
				</div>
			</main>

			<Footer />
		</>
	);
};
