import { Footer } from '@/components/footer/Footer';
import { MetadataWrapper } from '@/components/metadata-wrapper/MetadataWrapper';
import { Home } from '@/modules/home/Home';

export const HomePage = () => {
	return (
		<div className="container">
			<MetadataWrapper title="ProvPortal" description="Информационный сайт ProvPortal." />

			<Home />
			<Footer />
		</div>
	);
};
