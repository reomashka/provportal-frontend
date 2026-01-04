import bank from '@/assets/banners/bank.jpg';
import { Banner } from '@/components/banner/Banner';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { MetadataWrapper } from '@/components/metadata-wrapper/MetadataWrapper';
import { ScrollToTop } from '@/components/scroll-to-top/ScrollToTop';
import { FiltersAndSorts } from '@/modules/items/components/FiltersAndSorts';
import { ItemsList } from '@/modules/items/ItemsList';

export const ItemsListPage = () => {
	return (
		<>
			<MetadataWrapper
				title="ProvPortal"
				description="Полная информация обо всех аксессуарах на МТА Провинция. Каталог, характеристики."
			/>
			<Header />
			<main>
				<div className="container">
					<Banner path={bank} title={'Аксессуары'} />
					<FiltersAndSorts />
					<ItemsList />
					<ScrollToTop />
				</div>
			</main>

			<Footer />
		</>
	);
};
