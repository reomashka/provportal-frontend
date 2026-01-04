import bank from '@/assets/banners/bank.jpg';
import cargoBanner from '@/assets/banners/cargo.webp';
import guvdBanner from '@/assets/banners/house.png';
import passenger from '@/assets/banners/passenger.webp';
import { Banner } from '@/components/banner/Banner';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { MetadataWrapper } from '@/components/metadata-wrapper/MetadataWrapper';
import { ScrollToTop } from '@/components/scroll-to-top/ScrollToTop';
import { TransportClass } from '@/interfaces/Transport.interface';
import TransportTypeProps from '@/interfaces/TransportTypeProps.interface';
import { TransportList } from '@/modules/transport/TransportList';
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
			<MetadataWrapper
				title="Транспорт | ProvPortal"
				description="Полная информация обо всех транспортных средствах сервера МТА Провинция. Каталог, характеристики и статистика транспорта на ProvPortal."
			/>
			<Header />
			<main>
				<div className="container">
					<Banner path={rarityType[transportType]} title={transportTypeMap[transportType]} />
					<TransportList transportType={transportType} />
					<ScrollToTop />
				</div>
			</main>

			<Footer />
		</>
	);
};
