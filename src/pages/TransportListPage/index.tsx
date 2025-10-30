import { Header } from '@components/Header';
import { Banner } from '@components/Banner';
import { SortButtons } from '@modules/TransportList/components/FilterAndSort';
import { TransportList } from '@/modules/TransportList';
import { ScrollToTop } from '@components/ScrollToTop';
import { Footer } from '@components/Footer';
import TransportTypeProps from '@interfaces/TransportTypeProps.interface';

import { TransportListPageMetadata } from './TransportListPage.metadata';

import bank from '@assets/banners/bank.jpg';
import cargoBanner from '@/assets/banners/cargo.webp';
import guvdBanner from '@/assets/banners/house.png';

const transportTypeMap: Record<TransportTypeProps['transportType'], string> = {
	moto: 'Мотоциклы',
	passenger: 'Легковой транспорт',
	cargo: 'Грузовой транспорт',
	public: 'Общественный транспорт',
	container: 'Транспорт из контейнеров',
	exclusive: 'Экслюзивный транспорт',
	fraction: 'Фракционный транспорт',
};

const rarityType: Record<string, string> = {
	passenger: bank,
	cargo: cargoBanner,
	public: guvdBanner,
	container: bank,
	exclusive: bank,
	moto: bank,
};

export const TransportListPage = ({ transportType }: TransportTypeProps) => {
	return (
		<>
			<TransportListPageMetadata />
			<Header />
			<main>
				<div className="container">
					<Banner path={rarityType[transportType]} title={transportTypeMap[transportType]} />
					<SortButtons />
					<TransportList transportType={transportType} />
					<ScrollToTop />
				</div>
			</main>

			<Footer />
		</>
	);
};
