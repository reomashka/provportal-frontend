import { Header } from '@/components/Header';
import { ItemsPageMetadata } from './ItemsPage.metadata';
import { Banner } from '@/components/Banner';
import { FiltersAndSorts } from '@/modules/ItemsList/components/FiltersAndSorts';
import bank from '@/assets/banners/bank.jpg';
import { ItemList } from '@/modules/ItemsList';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Footer } from '@/components/Footer';

export const ItemsListPage = () => {
	return (
		<>
			<ItemsPageMetadata />
			<Header />
			<main>
				<div className="container">
					<Banner path={bank} title={'Аксессуары'} />
					<FiltersAndSorts />
					<ItemList />
					<ScrollToTop />
				</div>
			</main>

			<Footer />
		</>
	);
};
