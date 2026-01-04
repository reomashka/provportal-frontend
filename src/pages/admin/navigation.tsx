import bank from '@/assets/banners/bank.jpg';
import { Banner } from '@/components/banner/Banner';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { NavigationGrid } from '@/modules/admin/NavigationGrid';
export const AdminNavigationGridPage = () => {
	return (
		<>
			<Header />
			<main>
				<div className="container">
					<Banner path={bank} title="Админка" />
					<NavigationGrid />
				</div>
			</main>

			<Footer />
		</>
	);
};
