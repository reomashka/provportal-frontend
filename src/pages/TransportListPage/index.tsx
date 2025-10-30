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
import passenger from '@/assets/banners/passenger.webp';
import { TransportClass } from '@interfaces/Transport.interface';

const transportTypeMap: Record<TransportClass, string> = {
	[TransportClass.MOTO]: 'Мотоциклы',
	[TransportClass.PASSENGER]: 'Легковой транспорт',
	[TransportClass.CARGO]: 'Грузовой транспорт',
	[TransportClass.PUBLIC]: 'Общественный транспорт',
	[TransportClass.CONTAINER]: 'Транспорт из контейнеров',
	[TransportClass.EXCLUSIVE]: 'Экслюзивный транспорт',
	[TransportClass.FRACTION]: 'Фракционный транспорт',
};

const rarityType: Record<TransportClass, string> = {
	[TransportClass.PASSENGER]: passenger,
	[TransportClass.CARGO]: cargoBanner,
	[TransportClass.PUBLIC]: guvdBanner,
	[TransportClass.CONTAINER]: bank,
	[TransportClass.EXCLUSIVE]: bank,
	[TransportClass.MOTO]: bank,
	[TransportClass.FRACTION]: bank,
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
